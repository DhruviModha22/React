import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, updateTodo, deleteTodo, addTodo } from './redux/features/todoslice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todos);
  const [title, setTitle] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = () => {
    if (!title.trim()) return;
    if (editTodoId) {
      dispatch(updateTodo({ id: editTodoId, title, completed: false }));
      setEditTodoId(null);
    } else {
      dispatch(addTodo(title));
    }
    setTitle('');
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setEditTodoId(todo.id);
  };

  const handleToggle = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-6 bg-white shadow-md border border-gray-200 rounded-xl">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center"> Todo List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a task..."
          className="flex-grow border border-indigo-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        <button
          onClick={handleSubmit}
          className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          {editTodoId ? 'Update' : 'Add'}
        </button>
      </div>

      {loading && <p className="text-indigo-500 mb-4">Loading todos...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <ul className="space-y-3">
        {items.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-indigo-50 transition"
          >
            <span
              onClick={() => handleToggle(todo)}
              className={`cursor-pointer flex-1 ${
                todo.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-800 hover:text-indigo-600 transition'
              }`}
            >
              {todo.title}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(todo)}
                className="text-sm text-indigo-600 hover:text-indigo-800 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-sm text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {items.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-8">No todos yet — add something cool</p>
      )}
    </div>
  );
};

export default TodoList;
