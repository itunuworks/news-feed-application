import React from 'react';

/**
 * This module returns a <div> component housing a news item.
 *
 * @function Articles
 * @export
 * @param {any} props - Properties for the jsx component
 * @returns {JSX Component}
 */
export default function Articles(props) {
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
  function handleClick(e) {
    e.preventDefault();
    window.open(url, '_blank');
  }

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
}

// Proptype validation
Articles.propTypes = {
  url: React.PropTypes.string.isRequired,
  author: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  urlToImage: React.PropTypes.string.isRequired,
  publishedAt: React.PropTypes.string.isRequired,
};

Articles.defaultProps = {
  author: 'Anonymous'
};
