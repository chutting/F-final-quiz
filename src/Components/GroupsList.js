import React, { Component } from 'react';

class GroupsList extends Component {
  state = {
    groupList: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/groups', {
      method: 'GET',
      mode: 'cors'
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(data => {
      this.setState({
        groupList: data
      })
    });
  }

  render() {
    return <div className={this.props.visible ? "group-list-visble" : "group-list-unvisble"}>
      {
        this.state.groupList.map(group => {
          return (<div key={`group${group}`} className="group-container">
            <p className="group-name">{`${group} 组`}</p>
            <div className="student-group-container">
              {
                this.props.dataSource.filter(student => student.group === group).map(student => {
                  return <p key={`student${student.id}`} className="student-item">{`${student.id}. ${student.name}`}</p>
                })
              }
            </div>
          </div>)
        })
      }
    </div>
  }
}

export default GroupsList;