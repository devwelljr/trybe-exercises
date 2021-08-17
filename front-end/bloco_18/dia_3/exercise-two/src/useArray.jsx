import { useState } from 'react';

function useArray() {
  const [todos, setTodos] = useState([]);

  const addTodos = (task) => {
		const newArray = [ ...todos, task ]
    setTodos(newArray);
  };

  return {
    todos,
    addTodos,
  };
}

export default useArray;