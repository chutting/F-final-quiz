import React, { Component } from 'react';
// TODO GTB-工程实践: - 组件命名不合理。Header有特定的意义。
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="group-list-header">
          <h1>分组列表</h1>
          <button type="submit" className="grouping-button" onClick={this.props.onClickGrouping}>
            分组学员
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
