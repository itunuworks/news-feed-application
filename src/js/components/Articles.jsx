import React from 'react';
import { Container } from 'semantic-ui-react';

import newsStore from '../store/newsStore';
import NewsItemComp from './NewsItem';

/**
 * This class is a React component used to render articles.
 *
 * @export Articles
 * @class Articles
 * @extends {React.Component}
 */
export default class Articles extends React.Component {
  /**
   * Creates an instance of Articles.
   *
   * @memberof Articles
   */
  constructor() {
    super();
    this.getArticles = this.getArticles.bind(this);
    // Set current state of Articles to the articles in store.
    this.state = {
      articles: newsStore.fetchArticles(),
    };
  }

  /**
   * This sets up the listener for the store.
   *
   * @memberof Articles
   * @returns {void}
   */
  componentDidMount() {
    newsStore.on('articlesChanged', this.getArticles);
  }

  /**
   * This removes the listener for the store.
   *
   * @memberof Articles
   * @returns {void}
   */
  componentWillUnmount() {
    newsStore.removeListener('articlesChanged', this.getArticles);
  }

  /**
   * This function gets the articles from the store and sets
   * the fetch as our current articles state.
   *
   * @function getArticles
   * @memberof Articles
   * @returns {void}
   */
  getArticles() {
    this.setState({
      articles: newsStore.fetchArticles(),
    });
  }

  /**
   * This function renders a Container component
   *
   * @function render
   * @memberof Articles
   * @return {void}
   */
  render() {
    const { articles } = this.state;
    const articleComponents = articles.map(article => (
      <NewsItemComp
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

