import React, { Component } from 'react';
import '../style/header.css';

class StudentList extends Component {
  state = {
    studentList: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/students', {
      method: 'GET',
      mode: 'cors'
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(data => {
      this.setState({
        studentList: data
      })
    });
  }

  render() {
    return (
      <div className="student-list">
        {
          this.state.studentList.map(student => {
            return <p className="student-item" key={`student${student.id}`}>{`${student.id}. ${student.name}`}</p>
          })
        }
        <button className="add-student-button">+ 添加学员</button>
      </div>
    )
  }
}

export default StudentList;