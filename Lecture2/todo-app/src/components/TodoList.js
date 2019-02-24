import React from 'react';

class TodoList extends React.Component {
  render() {
    const { list, onDelete } = this.props;
    return (
      <div>

        {list.map((item, i) => {
          return (
            <div key={i}>
              <span>{item}</span>
              <button onClick={() => onDelete(item)}>삭제</button>
            </div>
          );
        })}

      </div>
    )
  }
}

export default TodoList;