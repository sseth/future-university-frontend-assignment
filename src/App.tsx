import { useState } from 'react';

import { todo } from './types';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {
  const initialTodos: todo[] = [
    {
      id: '1',
      text: 'Click the checkbox to mark a task as completed',
      completed: true,
    },
    {
      id: '2',
      text: 'Mouse over a task and click the x to remove',
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="mx-auto mt-[75px] max-w-[500px] rounded-md px-5 py-3 shadow">
      <h1 className="text-[25px]">To do</h1>
      <div className="mb-3 flex flex-col pt-3 h-[400px] overflow-y-auto">
        {todos.length ? (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))
        ) : (
          <p>No tasks added yet</p>
        )}
      </div>
      <hr className="mx-[-20px] mb-3" />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default App;