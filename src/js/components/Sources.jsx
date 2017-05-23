import React from 'react';

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
      filters: ['top'],
    };
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
    if (this.state.sources.length > 0) {
      this.reloadArticles(false);
    }
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
  reloadArticles(filter) {
    const selector = document.getElementById('selector');
    const filterSelector = document.getElementById('filterSelector');

    /*
    If filter is true, use the current filter selector value to sort articles.
    Else, use the default sort value
    */
    if (filter) {
      this.newsActions.getArticles(
        selector.options[selector.selectedIndex].value,
        filterSelector.options[filterSelector.selectedIndex].value);
    } else {
      const { sources } = this.state;

      this.newsActions.getArticles(
        selector.options[selector.selectedIndex].value
        );
      this.setState({
        filters: sources[selector.selectedIndex].sortBysAvailable,
      });
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
    const sourceComponents = sources.map(
      source => <Dropdownitem
        value={source.id}
        key={source.id}
        text={source.name}
      />);
    return (
      <div>
        <div className="ui center aligned text">
          Select Source
          <select
            id="selector" className="ui search dropdown ui left floated"
            onChange={() => {
              this.reloadArticles(false);
            }}
          >
            {sourceComponents}
          </select>
          Select Filter
          <select
            id="filterSelector" className="ui search dropdown ui right floated"
            onChange={() => {
              this.reloadArticles(true);
            }}
          >
            {filterComponents}
          </select>
        </div>
      </div>
    );
  }
}

