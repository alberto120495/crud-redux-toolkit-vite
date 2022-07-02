import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleEliminar = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-4/6  ">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks({tasks.length})</h1>
        <Link
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          to="/create-task"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => {
          return (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3>{task.title}</h3>
                <div className="flex space-x-2">
                  <Link
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md text-center"
                    to={`/edit-task/${task.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="bg-red-500 px-2 py-1 text-xs rounded-md text-center"
                    onClick={() => handleEliminar(task.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </header>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;
