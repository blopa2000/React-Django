import { useEffect, useState } from "react";
import { getAlltasks } from "../api/tas.api";
import { TaskCard } from "./TaskCard";

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getAlltasks();
      setTasks(res.data);
    })();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
