import React, { Component } from 'react';
import '../style/header.css';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="group-list-header">
          <h1>分组列表</h1>
          <button type="submit" className="grouping-button" onClick={this.props.onClickGrouping}>
            分组学员
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
