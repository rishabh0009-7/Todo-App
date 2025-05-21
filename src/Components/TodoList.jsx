import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  let [TodoList, setTodoList] = useState([]);
  let [task, setTask] = useState("");

  function add(event) {
    event.preventDefault();
    if (task === "") {
      alert("Please Enter the Task");
      return;
    }
    setTodoList([
      ...TodoList,
      {
        id: Date.now(),
        task: task,
        completed: false,
      },
    ]);
    setTask("");
    alert("Task Added ");
  }

  function Remove(id) {
    setTodoList(TodoList.filter((Todo) => Todo.id !== id));
  }

  function ToggleComplete(id) {
    setTodoList(
      TodoList.map((Todo) =>
        Todo.id === id ? { ...Todo, completed: !Todo.completed } : Todo
      )
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex flex-col items-center py-8">
      <div>
        <h1 className="text-5xl font-bold text-amber-300 text-center mb-8 drop-shadow-lg tracking-wide">
          TodoApp
        </h1>
      </div>
      <div className="flex justify-center w-full">
        <form
          onSubmit={add}
          className="bg-white shadow-lg w-full max-w-xl rounded-xl flex items-center px-4 py-2"
        >
          <input
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800 text-lg"
            type="text"
            placeholder="Enter the Task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button
            className="bg-amber-400 hover:bg-amber-500 text-white font-semibold w-24 ml-4 py-2 rounded-lg transition-all duration-200 shadow"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>

      <div className="mt-10 w-full max-w-xl">
        <ul className="space-y-4">
          {TodoList.map((Todo) => {
            return (
              <li
                key={Todo.id}
                className={`flex items-center justify-between bg-gray-800 rounded-lg px-5 py-4 shadow transition-all duration-200 ${
                  Todo.completed ? "opacity-60 line-through" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={Todo.completed}
                    onChange={() => ToggleComplete(Todo.id)}
                    className="h-5 w-5 accent-amber-400"
                  />
                  <span className="text-lg text-white">{Todo.task}</span>
                </div>
                <button
                  onClick={() => Remove(Todo.id)}
                  className="text-red-500 hover:text-red-700 text-2xl transition-all duration-150"
                  title="Delete"
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
