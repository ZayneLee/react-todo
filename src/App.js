import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoDate: [
      {
        id: '1',
        title: '공부하기',
        completed: true
      },
      {
        id: '2',
        title: '청소하기',
        completed: false
      }
    ]
  }

  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }

  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: 'none'
    }
  }



  handleClick = (id) => {
    let newTodoData = this.state.todoDate.filter(data => data.id !== id);
    this.setState({ todoDate: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          {this.state.todoDate.map((data) =>
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          )}

        </div>
      </div>
    )
  }
}