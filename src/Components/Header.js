import React, { Component } from 'react';
import GroupsList from './GroupsList';
import '../style/header.css';

class Header extends Component {
  render() {
    return <div className="container">
      <div className="group-list-header">
        <p>分组列表</p>
        <button className="grouping-button">分组学员</button>
      </div>
      <GroupsList />
    </div>
  }
}

export default Header;