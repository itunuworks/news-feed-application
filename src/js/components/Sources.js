import React from 'react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';
import Dropdownitem from './Dropdownitem';

export default class Sources extends React.Component{
  constructor(props) {
    super();
    this.reloadSources();
    this.state = {
      sources: newsStore.fetchSources(),
    }
    this.getSources = this.getSources.bind(this);
  }

  componentWillMount() {
    newsStore.on('sourcesChanged', this.getSources);
  }

  componentWillUnmount() {
    newsStore.removeListener('sourcesChanged', this.getSources);
  }

  getSources() {
    this.setState({
      sources: newsStore.fetchSources(),
    });
    
    if (this.state.sources.length > 0) {
      this.reloadArticles();
    }
  }

  reloadSources() {
    newsActions.getSources();
  }

  reloadArticles() {
    const selector = document.getElementById('selector');
    console.log(selector.options[selector.selectedIndex].value);
    newsActions.getArticles(selector.options[selector.selectedIndex].value); 
  }

  render() {
    const { sources } = this.state;
    const filterComponents = ['top', 'latest', 'popular'].map(item => {
      return <Dropdownitem value={item} key={item} text={item}/>;
    });
    const sourceComponents = sources.map(source => {
      return <Dropdownitem value={source.id} key={source.id} text={source.name}/>;
    });
    
    return (
      <div>
        <div>
          Select Source 
          <select id="selector" onChange={this.reloadArticles.bind(this)}>
            {sourceComponents}
          </select>
          Select Filter
          <select onChange={this.reloadArticles.bind(this)}>
            {filterComponents}
          </select>
        </div>
      </div>
    );
  }
}

