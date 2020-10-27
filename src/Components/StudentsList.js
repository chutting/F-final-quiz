import React, { Component } from 'react';
import '../style/header.css';

class StudentList extends Component {

  render() {
    return (
      <div className="student-list">
        {
          this.props.dataSource.map(student => {
            return <p className="student-item" key={`student${student.id}`}>{`${student.id}. ${student.name}`}</p>
          })
        }
        <button type="submit" className="add-student-button">+ 添加学员</button>
      </div>
    )
  }
}

export default StudentList;