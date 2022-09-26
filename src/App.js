import './App.css';
import InputArea from './components/InputArea';
import IncompleteArea from './components/IncompleteArea';
import UnderwayArea from './components/UnderwayArea';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [underwayTodos, setUnderwayTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickUnderway = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newUnderwayTodos = [...underwayTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setUnderwayTodos(newUnderwayTodos);
  };

  const onClickBack = (index) => {
    const newUnderwayTodos = [...underwayTodos];
    newUnderwayTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, underwayTodos[index]]

    setUnderwayTodos(newUnderwayTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete2 = (index) => {
    const newUnderwayTodos = [...underwayTodos];
    newUnderwayTodos.splice(index, 1); 

    const  newCompleteTodos = [...completeTodos, underwayTodos[index]];

    setUnderwayTodos(newUnderwayTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete2 = (index) => {
    const newUnderwayTodos = [...underwayTodos];
    newUnderwayTodos.splice(index, 1); 
    setUnderwayTodos(newUnderwayTodos);
  };

  const onClickBack2 = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1); 

    const newUnderwayTodos = [...underwayTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setUnderwayTodos(newUnderwayTodos);
  };

  const onClickDelete3 = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };


  return (
    <>
      <InputArea 
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteArea  
        incompleteTodos={incompleteTodos} 
        onClickUnderway={onClickUnderway}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <UnderwayArea 
        underwayTodos={underwayTodos}
        onClickBack={onClickBack}
        onClickComplete2={onClickComplete2}
        onClickDelete2={onClickDelete2}
      />
      
      <div className='complete-area'>
        <p className='title'>完了済みのタスク</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div className='list-row' key={uuidv4()}>
                <li>{todo}</li>
                <div className='buttonSection'>
                  <button  onClick={() => onClickBack2(index)}>戻す</button>
                  <button onClick={() => onClickDelete3(index)}>削除</button>
                </div>
              </div>
            )
          })}
        </ul>

      </div>



    </>
  )
}
export default App;
