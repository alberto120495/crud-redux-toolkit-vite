import TasksForm from "./components/TasksForm";
import TaskList from "./components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex justify-center items-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TasksForm />} />
            <Route path="/edit-task/:id" element={<TasksForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
