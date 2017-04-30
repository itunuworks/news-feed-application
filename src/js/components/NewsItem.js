import React from 'react';

import newsStore from '../store/newsStore';
import * as newsActions from '../actions/newsActions';

export default class Articles extends React.Component{
  constructor(props) {
    super();
  }

  handleClick(e) {
    const { url } = this.props;

    window.open(url,'_blank');
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

// function handleClick(e) {
//   window.open('http://www.aljazeera.com/news/2017/04/philippine-leader-korea-world-170429145920088.html','_blank');
// }

// function(){window.open('www.yourdomain.com','_blank')}