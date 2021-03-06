import React, { Component } from 'react';
import { Tooltip } from 'antd';
import http from '../utils/http';

class Item extends Component {
  overlayStyle = {
    padding: 0,
    width: '10px',
  };

  handleDeleteItem = () => {
    const { target, data } = this.props;
    http.delete(`/${target}/${data.id}`);
  };

  render() {
    const { data } = this.props;
    const prompt = (
      <button type="button" className="promptBtn" onClick={this.handleDeleteItem}>
        X
      </button>
    );
    return (
      <Tooltip placement="right" title={prompt} color="#ea5455" overlayStyle={this.overlayStyle}>
        <button className="item" type="button">{`${data.id}. ${data.name}`}</button>
      </Tooltip>
    );
  }
}

export default Item;
