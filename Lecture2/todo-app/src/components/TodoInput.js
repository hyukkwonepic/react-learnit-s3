import React from 'react';

class TodoInput extends React.Component {
  render() {
    const { value, onChange, onAdd } = this.props;
    return (
      <div>
        <input value={value} onChange={onChange} />
        <button onClick={onAdd}>추가하기</button>
      </div>
    )
  }
}

export default TodoInput;