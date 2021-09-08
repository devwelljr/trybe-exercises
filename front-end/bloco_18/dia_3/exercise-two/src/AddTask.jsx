import React, { useState } from 'react';
import useArray from './useArray';
import List from './List';

function AddTask() {
  const [newTask, setNewTask] = useState('');
  const { addTodos, todos } = useArray();

  const handleInput = ({ target }) => {
    setNewTask(target.value);
  };

  const handleClick = () => {
    addTodos(newTask);
    setNewTask('');
  };

  return (
    <>
      <label htmlFor="task-input">
        Add a task:
        <input
          id="task-input"
          value={ newTask }
          onChange={ handleInput }
        />
      </label>
      <button type="button" onClick={ handleClick }>Add</button>
      <List tasks={ todos } />
    </>
  );
}

export default AddTask;
