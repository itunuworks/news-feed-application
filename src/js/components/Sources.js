import React from 'react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';
import Dropdownitem from './Dropdownitem';

export default class Sources extends React.Component{
  constructor(props) {
    super();
    this.getSources = this.getSources.bind(this);
    this.state = {
      sources: newsStore.fetchSources(),
    }
  }

  componentWillMount() {
    newsStore.on('sourcesChanged', this.getSources);
    this.reloadSources();
  }


  componentWillUnmount() {
    newsStore.removeListener('sourcesChanged', this.getSources);
  }

  getSources() {
    this.setState({
      sources: newsStore.fetchSources(),
    })
  }

  reloadSources() {
    newsActions.getSources();
  }

  reloadHeadlines() {
    const selector = document.getElementById('selector');
    console.log(selector.options[selector.selectedIndex].value);
    newsActions.getHeadlines(selector.options[selector.selectedIndex].value); 
  }

  render() {
    const { sources } = this.state;
    const sourceComponents = sources.map(source => {
      return <Dropdownitem value={source.id} key={source.id} text={source.name}/>;
    });
    
    return (
      <div>
        <h1>Hi, I am the sources DropdownBox.</h1>
        <div>
          Select Source 
          <select id="selector" onChange={this.reloadHeadlines.bind(this)}>
            {sourceComponents}
          </select>
        </div>
      </div>
    );
  }
}

