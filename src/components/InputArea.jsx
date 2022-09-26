import React from 'react'

const InputArea = (props) => {
  const {todoText, onChange, onClick} = props;
  return (
    <div className='input-area'>
      <input 
        type="text"
        placeholder='タスクを入力'
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  )
}

export default InputArea