import React from 'react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';
// import Dropdownitem from './Dropdownitem';

export default class Articles extends React.Component{
  constructor(props) {
    super();
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: newsStore.fetchArticles(),
    }
  }

  componentWillMount() {
    newsStore.on('articlesChanged', this.getArticles);
    this.reloadArticles();
  }

  componentWillUnmount() {
    newsStore.removeListener('articlesChanged', this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: newsStore.fetchArticles(),
    })
  }

  reloadArticles() {
    const selector = document.getElementById('selector');
    console.log(selector.options[selector.selectedIndex].value);
    newsActions.getArticles(selector.options[selector.selectedIndex].value); 
  }

  render() {
    const { articles } = this.state;
    const articleComponents = articles.map(article => {
      return <Dropdownitem value={source.id} key={source.id} text={source.name}/>;
    });
    
    return (
      <div>
        <h1>Hi, I am the sources DropdownBox.</h1>
        <div>
          Select Source 
          <select id="selector" onChange={this.reloadArticles.bind(this)}>
            {sourceComponents}
          </select>
        </div>
      </div>
    );
  }
}

