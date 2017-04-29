import React from 'react';

import newsStore from '../store/newsStore';

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
  }

  getSources() {
    this.setState({
      sources: newsStore.fetchSources(),
    })
  }

  render() {
    const { sources } = this.state;
    const sourceComponents = sources.map(source => {
      return <Dropdownitem value={source.name} key={source.id}/>;
    });
    
    return (
      <div>
        <h1>Hello Everyone, I am a news apps.</h1>
        <div>
          Select Source 
          <select>
            {sourceComponents}
          </select>
        </div>
      </div>
    );
  }
}

