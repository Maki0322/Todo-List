import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const UnderwayArea = (props) => {
  const {underwayTodos, onClickBack, onClickComplete2, onClickDelete2} = props;
  return (
    <div className='underway-area'>
      <p className='title'>進行中のタスク</p>
      <ul>
        {underwayTodos.map((todo, index) => {
          return (
            <div className='list-row' key={uuidv4()}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
              <button onClick={() => onClickComplete2(index)}>完了</button>
              <button onClick={() => onClickDelete2(index)}>削除</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default UnderwayArea