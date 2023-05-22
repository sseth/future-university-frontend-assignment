import { useState } from 'react';
import uniqid from 'uniqid';

import Button from './Button';
import { todo } from '../types';

type AddTodoProps = {
  test?: string;
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const AddTodo = ({ setTodos }: AddTodoProps) => {
  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos((todos: todo[]) => {
      const newTodos = [...todos, { id: uniqid(), text, completed: false }];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });

    setText('');
  };

  return (
    <div className="flex w-full">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') addTodo();
        }}
        placeholder="Click here to add a task"
        className="mr-3 w-full rounded-lg border-none bg-gray-200 px-3
          focus:ring-transparent"
      />
      <Button text="add" onClick={addTodo} />
    </div>
  );
};

export default AddTodo;
