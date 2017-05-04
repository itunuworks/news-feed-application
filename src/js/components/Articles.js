import React from 'react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';
import NewsItem from './NewsItem';

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
  }

  componentWillUnmount() {
    newsStore.removeListener('articlesChanged', this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: newsStore.fetchArticles(),
    })
  }

  render() {
    const { articles } = this.state;
    const articleComponents = articles.map(article => {
      return <NewsItem author={article.author} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} publishedAt={article.publishedAt} key={article.url}/>;
    });
    return (
      <div>
        <ul>
          <li><b>My list of articles goes up in here.</b></li>
          {articleComponents}
        </ul>
      </div>
    );
  }
}

