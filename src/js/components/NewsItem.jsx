import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module returns a <div> component housing a news item.
 *
 * @function Articles
 * @param {any} props - Properties for the jsx component
 * @returns {JSX Component}
 */
const Articles = (props) => {
  const {
      url, author, title, description, urlToImage, publishedAt
    } = props;

  /**
   * This function handles a click on the NewsItem header,
   * opening the article on a fresh tab.
   *
   * @function handleClick
   * @param {object} e
   */
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className="item">
      <div className="image">
        <img src={urlToImage} alt="list" />
      </div>
      <div className="content">
        <a href="#/main" className="header" onClick={handleClick}>{ title }</a>
        <div className="meta">
          <span><small>By - {author}</small></span>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="extra">
          <small><i>published at: {publishedAt}</i></small>
        </div>
      </div>
    </div>
  );
};

// Proptype validation
Articles.propTypes = {
  url: PropTypes.string.isRequired,
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string,
};

Articles.defaultProps = {
  author: 'Anonymous',
  publishedAt: ''
};

export default Articles;
