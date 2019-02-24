import React from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

class Todo extends React.Component {

  state = {
    todos: [
      '청소하기',
      '장보기',
      '빨래하기',
      '밥먹기'
    ],
    value: '',
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleAdd = () => {
    const { value, todos } = this.state;

    this.setState({
      todos: [
        ...todos,
        value
      ],
      value: '',
    });
  }

  handleDelete = (item) => {
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => {
      return todo !== item;
    });

    this.setState({
      todos: newTodos
    });
  }

  render() {
    const { todos, value } = this.state;
    return (
      <div>
        <TodoInput
          value={value}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
        />
        <TodoList
          list={todos}
          onDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default Todo;