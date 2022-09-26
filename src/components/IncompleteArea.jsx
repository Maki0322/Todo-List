import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const IncompleteArea = (props) => {
  const {incompleteTodos, onClickUnderway, onClickComplete, onClickDelete} = props;
  return (
    <div className='incomplete-area'>
      <p className='title'>未完了のタスク</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div className='list-row' key={uuidv4()}>
              <li>{todo}</li>
              <button onClick={() => onClickUnderway(index)}>進行中</button>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default IncompleteArea