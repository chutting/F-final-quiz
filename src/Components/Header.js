import React, { Component } from 'react';
import GroupsList from './GroupsList';
import '../style/header.css';

class Header extends Component {
  state = {
    groupingStudentList : [],
    groupListVisible: false
  }

  handleGrouping = () => {
    fetch('http://localhost:8080/grouping', {
      method: 'GET',
      mode: 'cors'
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(data => {
      this.setState({
        groupingStudentList: data,
        groupListVisible: true
      })
    });
  }


  render() {
    return <div className="container">
      <div className="group-list-header">
        <p>分组列表</p>
        <button type="submit" className="grouping-button" onClick={this.handleGrouping}>分组学员</button>
      </div>
      <GroupsList dataSource={this.state.groupingStudentList} visible={this.state.groupListVisible} />
    </div>
  }
}

export default Header;