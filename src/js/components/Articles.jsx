import React from 'react';
import { Container } from 'semantic-ui-react';

import newsStore from '../store/newsStore';
import NewsItem from './NewsItem';

export default class Articles extends React.Component {
  constructor() {
    super();
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: newsStore.fetchArticles(),
    };
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
    });
  }

  render() {
    const { articles } = this.state;
    const articleComponents = articles.map(article => (
      <NewsItem
        author={article.author}
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
        key={article.url}
      />
    ));
    return (
      <Container text>
        <div className="ui items">
          { articleComponents }
        </div>
      </Container>
    );
  }
}

