import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Todo() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") {
      toast.warning("Please write something!!!");
      return;
    } else {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
      toast.success("Note Added Successfully!");
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task,
    );
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    toast.success("Note Deleted Successfully!");
  };

  return (
    <div className="md:max-w-md w-full mx-auto mt-10 p-6 rounded-lg bg-accent_Color shadow-lg">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="flex items-center justify-between bg-body_Color rounded-full p-3 shadow-md w-full flex-wrap">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Your Text"
          className="flex-1 border-none outline-none bg-transparent px-2 text-white placeholder-gray-300 w-full"
        />
        <button
          onClick={addTask}
          className="bg-transparent border border-text_Color text-text_Color px-9 py-2 transition-all duration-150 ease-linear rounded-full hover:bg-text_Color hover:text-white"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={`relative p-4 pl-10 cursor-pointer bg-body_Color text-white rounded-2xl shadow-md flex items-center justify-between transition-all duration-150 ease-in-out ${task.completed ? "line-through text-gray-400" : ""}`}
          >
            <span className="flex-1">{task.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTask(index);
              }}
              className="text-gray-500 hover:text-red-500 text-2xl transition-all duration-150 ease-linear"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
