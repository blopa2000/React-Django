import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TaskformPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks-create" element={<TasksFormPage />} />
            <Route path="/tasks/:id" element={<TasksFormPage />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
