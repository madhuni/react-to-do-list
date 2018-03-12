import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.classes = ['list-item'];
  }

  render() {
    return (
      <li className={this.classes.join(' ')} onClick={() => this.props.deleteItem(this.props.keyValue)} >
        <span className="item-text">{this.props.text}</span>
      </li>
    );
  }
}

export default ListItem;