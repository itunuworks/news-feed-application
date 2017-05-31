import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';
import Dropdownitem from './DropdownItem';

/**
 * This class is a React component housing the dropdown boxes
 * used to select a source and sort parameter.
 *
 * @export Sources
 * @class Sources
 * @extends {React.Component}
 */
export default class Sources extends React.Component {
  /**
   * Creates an instance of Sources.
   *
   * @memberof Sources
   */
  constructor() {
    super();
    this.newsActions = newsActions;
    // Initialize source fetch from API.
    this.reloadSources();
    this.state = {
      sources: newsStore.fetchSources(),
      filters: ['top']
    };
    this.currentSource = '';
    this.getSources = this.getSources.bind(this);
    this.reloadArticles = this.reloadArticles.bind(this);
  }

  /**
   * Setup sourcesChanged listener
   *
   * @memberof Sources
   */
  componentDidMount() {
    newsStore.on('sourcesChanged', this.getSources);
  }

  /**
   * Remove sourcesChanged listener
   *
   * @memberof Sources
   */
  componentWillUnmount() {
    newsStore.removeListener('sourcesChanged', this.getSources);
  }

  /**
   * This function sets the state of sources in this component to the
   * sources currently available in the store.
   * If there are currently sources in the store, the articles are fetched.
   *
   * @function getSources
   * @memberof Sources
   */
  getSources() {
    this.setState({
      sources: newsStore.fetchSources(),
    });
  }

  /**
   * This function triggers a fresh update of sources from the API
   *
   * @function reloadSources
   * @memberof Sources
   */
  reloadSources() {
    this.newsActions.getSources();
  }

  /**
   * This function triggers a fresh update of articles form the API,
   * based on the current selected sources and sort.
   *
   * @param {boolean} filter - false if we want to use the default filter.
   * @function reloadArticles
   * @memberof Sources
   */
  reloadArticles(filter, sourceValue) {
    const filterSelector = document.getElementById('filterSelector');

    /*
    If filter is true, use the current filter selector value to sort articles.
    Else, use the default sort value
    */
    if (filter) {
      this.newsActions.getArticles(
        sourceValue,
        filterSelector.options[filterSelector.selectedIndex].value);
    } else {
      const { sources } = this.state;
      const sourceIds = sources.map(source => source.id);
      this.currentSource = sourceValue;
      this.setState({
        filters: sources[sourceIds.indexOf(sourceValue)].sortBysAvailable,
      });
      window.localStorage.removeItem('showPlaceholder');
      this.newsActions.getArticles(sourceValue);
      // Make the filterSelector select its first value.
      filterSelector.selectedIndex = 0;
    }
  }

  /**
   * This function renders a <div> component containing a source selection
   * dropdown and also a sort dropdown box.
   *
   * @returns {JSX Component}
   * @function render
   * @memberof Sources
   */
  render() {
    const { sources, filters } = this.state;
    const filterComponents = filters.map(
      filter => <Dropdownitem value={filter} key={filter} text={filter} />);
    const newsSources = sources.map(
     source => (
       {
         key: source.id,
         value: source.id,
         text: source.name
       }
      ));
    return (
      <div>
        <div
          className="ui right aligned container text" style={{ margin: '20px' }}
        >
          <Dropdown
            placeholder="News Sources"
            fluid search selection options={newsSources}
            style={{ float: 'left', width: '60%' }}
            onChange={(syntheticEvent, payload) => {
              this.reloadArticles(false, payload.value);
            }}
          />
          <select
            id="filterSelector" className="ui search dropdown right floated"
            style={{ width: '20%' }}
            onChange={() => {
              this.reloadArticles(true, this.currentSource);
            }}
          >
            {filterComponents}
          </select>
        </div>
        <h1
          id="placeHolderString"
          className="ui center aligned disabled header"
          style={{
            fontSize: '-webkit-xxx-large',
            margin: '80px',
            marginTop: '150px',
            display:
              window.localStorage.getItem('showPlaceholder') ? 'block' : 'none'
          }}
        >To begin, select a NEWS SOURCE</h1>
      </div>
    );
  }
}

