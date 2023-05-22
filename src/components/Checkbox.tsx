import { todo } from '../types';

type CheckboxProps = {
  todo: todo;
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const Checkbox = ({ todo, setTodos }: CheckboxProps) => {
  const { id, text, completed } = todo;

  const toggleCompleted = () =>
    setTodos(todos => {
      const newTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={toggleCompleted}
        className="mr-3 appearance-none rounded-xl border-gray-300
          checked:bg-spec-green checked:bg-none hover:border-none
          hover:bg-spec-green hover:shadow-md checked:hover:bg-green-600
          focus:ring-transparent focus:checked:bg-spec-green
          focus:checked:hover:bg-green-600"
      />
      <label
        htmlFor={id}
        className={`${completed ? 'text-gray-400 line-through' : ''}`}
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
