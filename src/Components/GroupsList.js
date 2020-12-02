import React, { Component } from 'react';
import { getAllGroups } from '../actions/groups';
import Item from './Item';

class GroupsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
    };
  }

  componentDidMount() {
    getAllGroups().then((data) => {
      this.setState({
        groupList: data,
      });
    });
  }

  render() {
    const { groupList } = this.state;
    return (
        //  TODO feedback: 没有使用section标签
      <div>
        {/* // TODO feedback: 列表元素没有使用ul li */}
        {groupList.map((group) => {
          return (
            <section key={`group${group.id}`} className="group-container">
              <header className="group-header">
                <p className="group-name">{`${group.name}`}</p>
                <div className="trainers-group-container">
                  {/* // TODO feedback: 列表元素没有使用ul li */}
                  {group.trainers.map((trainer) => {
                    return <Item key={`trainer${trainer.id}`} data={trainer} target="trainers" />;
                  })}
                </div>
              </header>
              <main className="trainees-group-container">
                {/* // TODO feedback: 列表元素没有使用ul li */}
                {group.trainees.map((trainee) => {
                  return <Item key={`trainee${trainee.id}`} data={trainee} target="trainees" />;
                })}
              </main>
            </section>
          );
        })}
      </div>
    );
  }
}

export default GroupsList;
