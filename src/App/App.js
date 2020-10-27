import React, { Component } from 'react';
import './App.scss';
import Header from '../Components/Header'
import StudentList from '../Components/StudentsList';

class App extends Component {
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
      <div className="main-container">
        <Header dataSource={this.state.studentList}/>
        <StudentList dataSource={this.state.studentList}/>
      </div>
    );
  }
}

export default App;
