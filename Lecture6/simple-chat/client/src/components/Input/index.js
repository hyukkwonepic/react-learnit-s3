import React from 'react';
import styled from 'styled-components';

const Input = ({ message, onChange, onSend, ...props }) => {
  return (
    <Wrapper {...props}>
      <input
        value={message}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSend();
          }
        }}
        placeholder="메시지를 입력하세요"
      />
      <button onClick={onSend}>보내기</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  input {
    width: calc(100% - 8rem);
    height: 100%;
    font-size: 1.6rem;
    padding: 0rem;
    padding-left: 1.6rem;
    border: 0rem;
    border-bottom: 1px solid #eee;
    vertical-align: middle;
  }
  
  button {
    width: 8rem;
    height: 100%;
    background-color: #333;
    color: #fff;
    padding: 0rem;
    border: 0rem;
    vertical-align: middle;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export default Input;