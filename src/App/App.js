import React, { Component } from 'react';
import './App.scss';
import Header from '../Components/Header';
import BaseList from '../Components/BaseList';
import GroupsList from '../Components/GroupsList';
import { autoGrouping } from '../actions/groups';

class App extends Component {
  handleAutoGrouping = () => {
    autoGrouping();
  };

  render() {
    return (
      <div className="main-container">
        <header>
          <Header onClickGrouping={this.handleAutoGrouping} />
        </header>
        <main>
          <GroupsList />
          <BaseList target="trainers" />
          <BaseList target="trainees" />
        </main>
      </div>
    );
  }
}

export default App;
