import React from 'react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';
// import Dropdownitem from './Dropdownitem';

export default class Articles extends React.Component{
  constructor(props) {
    super();
  }

  render() {
    const { author, title, description, url, urlToImage, publishedAt } = this.props;
    
    return (
      <li>
        <div>
          <a href={url}>{title}</a>
          <div>{description}</div>
          <div>Author: {author}</div>
          <div>Posted On: {publishedAt}</div>
        </div>
      </li>
    );
  }
}

