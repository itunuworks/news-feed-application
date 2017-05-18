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
      <li className="collection-item avatar yellow">
        <div>
          <a href="/main" onClick={this.handleClick.bind(this)}>{title}</a>
          <img alt="HTML5" src={urlToImage} className="circle" />
          <div>{description}</div>
          <div>Author: {author}</div>
          <div>Posted On: {publishedAt}</div>
        </div>
      </li>
    );
  }
}
