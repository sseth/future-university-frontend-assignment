import { todo } from '../types';
import Checkbox from './Checkbox';
import Button from './Button';

type TodoItemProps = {
  todo: todo;
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
  const deleteTodo = (id: string) => {
    setTodos(todos => {
      const newTodos = todos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <div className="group mb-2 flex justify-between">
      <Checkbox todo={todo} setTodos={setTodos} />
      <div
        className="opacity-0 group-hover:opacity-100 
          group-hover:transition group-hover:duration-300"
      >
        <Button small text="X" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
