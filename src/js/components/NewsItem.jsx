import React from 'react';

export default class Articles extends React.Component {

  handleClick(e) {
    const { url } = this.props;
    e.preventDefault();
    window.open(url, '_blank');
  }

  render() {
    const {
      author, title, description, urlToImage, publishedAt
    } = this.props;
    return (
      <div className="item">
        <div className="image">
          <img src={urlToImage} alt="list" />
        </div>
        <div className="content">
          <a href="#/main" className="header" onClick={this.handleClick.bind(this)}>{ title }</a>
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
}
