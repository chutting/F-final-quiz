import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../style/header.css';
import { Modal, Button, Form, Input } from 'antd';

class StudentList extends Component {
  state = { 
    visible: false,
    newStudentName: ''
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  onFinish = values => {
    fetch('http://localhost:8080/student', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
      method: 'POST',
      mode: 'cors'
    }).then(response => {
      if (response.status === 201) {
        location.reload() 
      }
    });

    this.setState({
      visible: false,
    });
  };

  render() {   
    return (
      <div className="student-list">
        {
          this.props.dataSource.map(student => {
            return <p className="student-item" key={`student${student.id}`}>{`${student.id}. ${student.name}`}</p>
          })
        }
        <Button onClick={this.showModal} id="add-student-button">
          + 添加学员
        </Button>
        <Modal
          title="添加学员信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form 
            name="basic"
            onFinish={this.onFinish}>
            <Form.Item
              label="学员姓名"
              name="name"
              rules={[{ required: true, message: '姓名不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default StudentList;