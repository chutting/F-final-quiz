import React, { Component } from 'react';
import './App.scss';
// TODO GTB-工程实践: - Components/文件夹的命名应该小写
import Header from '../Components/Header';
import BaseList from '../Components/BaseList';
import GroupsList from '../Components/GroupsList';
import { autoGrouping } from '../actions/groups';

class App extends Component {
    // TODO GTB-完成度: - 调用了分组的API，但是之后并没有对整个页面产生任何影响
  handleAutoGrouping = () => {
    autoGrouping();
  };

  render() {
    return (
      <div className="main-container">
        {/*  // TODO GTB-知识点: - 职责划分不合理。Header组件应该属于分组列表组件（你没有划分出这一个组件）的一部分，而不是直接是App的一个子组件 */}
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
