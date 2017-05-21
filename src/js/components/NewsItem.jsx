import React from 'react';

export default function Articles(props) {
  const {
      author, title, description, urlToImage, publishedAt
    } = props;

  function handleClick(e) {
    const { url } = this.props;
    e.preventDefault();
    window.open(url, '_blank');
  }

  const clickHandler = handleClick.bind(this);
  return (
    <div className="item">
      <div className="image">
        <img src={urlToImage} alt="list" />
      </div>
      <div className="content">
        <a href="#/main" className="header" onClick={clickHandler}>{ title }</a>
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

Articles.propTypes = {
  author: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  urlToImage: React.PropTypes.string.isRequired,
  publishedAt: React.PropTypes.string.isRequired,
};

Articles.defaultProps = {
  author: 'Anonymous'
};
