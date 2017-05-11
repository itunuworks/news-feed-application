import React from 'react';

export default class Articles extends React.Component {

  handleClick() {
    const { url } = this.props;

    window.open(url, '_blank');
  }

  render() {
    const { author, title, description, url, urlToImage, publishedAt } = this.props;
    return (
      <li>
        <div>
          <a href='#' onClick={this.handleClick.bind(this)}>{title}</a>
          <div>{description}</div>
          <div>Author: {author}</div>
          <div>Posted On: {publishedAt}</div>
        </div>
      </li>
    );
  }
}
