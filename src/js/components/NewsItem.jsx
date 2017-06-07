import React from 'react';
import PropTypes from 'prop-types';

/**
 * This function handles a click on the NewsItem header,
 * opening the article on a fresh tab.
 *
 * @function handleClick
 * @returns {void}
 * @param {object} event
 * @param {string} url
 */
export const handleClick = (event, url) => {
  event.preventDefault();
  window.open(url, '_blank');
};

/**
 * This module returns a <div> component housing a news item.
 *
 * @function Articles
 * @param {any} props - Properties for the jsx component
 * @returns {jsx} - React component
 */
export const NewsItem = (props) => {
  const {
      url, author, title, description, urlToImage, publishedAt
    } = props;

  return (
    <div className="item">
      <div className="image">
        <img src={urlToImage} alt="list" />
      </div>
      <div className="content">
        <a
          href="#/main" className="header" onClick={
            event => handleClick(event, url)
          }
        >{ title }</a>
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
NewsItem.propTypes = {
  url: PropTypes.string.isRequired,
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string,
};

NewsItem.defaultProps = {
  author: 'Anonymous',
  publishedAt: ''
};

export default NewsItem;
