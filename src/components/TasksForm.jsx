import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TasksForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <form className="bg-zinc-800 max-w-sm p-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="title" className="block text-xs font-bold mb-2">
          Tarea:
        </label>
        <input
          className="w-full p-2 rounded-md bg-zinc-600 mb-2 outline-none"
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          value={task?.title || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-xs font-bold mb-2">
          Descripcion:
        </label>
        <textarea
          className="w-full p-2 rounded-md bg-zinc-600 mb-2 outline-none"
          id="description"
          name="description"
          placeholder="Description"
          value={task?.description || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        className="w-full bg-indigo-600 px-2 py-1 rounded-md"
        type="submit"
      >
        {params.id ? "Save" : "Add"}
      </button>
    </form>
  );
}

export default TasksForm;
