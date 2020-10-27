import React, { Component } from 'react';
import './App.scss';
import Header from '../Components/Header'
import StudentList from '../Components/StudentsList';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <StudentList />
      </div>
    );
  }
}

export default App;
