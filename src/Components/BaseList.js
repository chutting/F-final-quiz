import React, { Component } from 'react';
import http from '../utils/http';
import Item from './Item';

class BaseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      newItemName: '',
    };
  }

  componentDidMount() {
    const { target } = this.props;
    // TODO GTB-知识点: - 应该使用状态提升，把数据提升到App组件，因为分组的行为会触发讲师和学员列表的更新
    http.get(`/${target}?grouped=false`).then((data) => {
      this.setState({
        listData: data,
      });
    });
  }

  handleAddItem = (e) => {
    if (e.keyCode === 13) {
      const { newItemName } = this.state;
      const { target } = this.props;
      if (newItemName) {
        http.post(`/${target}`, {
          name: newItemName,
        });
      }
    }
  };

  handleSaveValue = (e) => {
    this.setState({
      newItemName: e.target.value,
    });
  };

  render() {
    const { target } = this.props;
    const targetString = target === 'trainees' ? '学员' : '讲师';
    return (
        //  TODO feedback: 没有使用section标签
      <div className="base-list">
        <h1>{`${targetString}列表`}</h1>
        <main className="base-list-main">
          {this.state.listData.map((item) => {
            return <Item key={`${target}${item.id}`} data={item} target={target} />;
          })}
          <input
            placeholder={`+ 添加${targetString}`}
            className="add-item"
            onChange={this.handleSaveValue}
            onKeyUp={this.handleAddItem}
          />
        </main>
      </div>
    );
  }
}

export default BaseList;
