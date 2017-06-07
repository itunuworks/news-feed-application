import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';

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
      filters: ['top'],
      currentFilter: 'top'
    };
    this.currentSource = '';
    this.getSources = this.getSources.bind(this);
    this.reloadArticles = this.reloadArticles.bind(this);
  }

  /**
   * Setup sourcesChanged listener
   * @returns {void}
   * @memberof Sources
   */
  componentDidMount() {
    newsStore.on('sourcesChanged', this.getSources);
  }

  /**
   * Remove sourcesChanged listener
   *
   * @returns {void}
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
   * @returns {void}
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
   * @returns {void}
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
   * @param {string} sourceValue - value of the source news item to search for.
   * @function reloadArticles
   * @returns {void}
   * @memberof Sources
   */
  reloadArticles(filter, sourceValue) {
    /*
    If filter is true, use the current filter selector value to sort articles.
    Else, use the default sort value
    */
    if (filter) {
      this.newsActions.getArticles(
        sourceValue,
        filter
      );
      this.setState({
        currentFilter: filter
      });
    } else {
      const { sources } = this.state;
      const sourceIds = sources.map(source => source.id);
      this.currentSource = sourceValue;
      this.setState({
        filters:
          sources[sourceIds.indexOf(sourceValue)].sortBysAvailable,
        currentFilter:
          sources[sourceIds.indexOf(sourceValue)].sortBysAvailable[0]
      });
      window.localStorage.removeItem('showPlaceholder');
      this.newsActions.getArticles(sourceValue);
    }
  }

  /**
   * This function renders a <div> component containing a source selection
   * dropdown and also a sort dropdown box.
   *
   * @function render
   * @memberof Sources
   * @returns {jsx} - React Component
   */
  render() {
    const { sources, filters } = this.state;
    const newsSources = sources.map(
      source => (
        {
          key: source.id,
          value: source.id,
          text: source.name
        }
      ));
    const filterSources = filters.map(
      filter => (
        {
          key: filter,
          value: filter,
          text: filter
        }
      ));
    return (
      <div>
        <div
          className="ui right aligned container text" style={{ margin: '20px' }}
        >
          <Dropdown
            id="newsSourceSelector"
            placeholder="News Sources"
            fluid search selection options={newsSources}
            style={{ float: 'left', width: '60%' }}
            onChange={(syntheticEvent, payload) => {
              this.reloadArticles(false, payload.value);
            }}
          />
          <Dropdown
            id="filterSelector"
            placeholder="Filter"
            value={this.state.currentFilter}
            search selection options={filterSources}
            onChange={(syntheticEvent, payload) => {
              this.reloadArticles(payload.value, this.currentSource);
            }}
          />
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

