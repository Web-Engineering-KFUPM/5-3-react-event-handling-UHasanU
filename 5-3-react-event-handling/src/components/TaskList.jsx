import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}
      {(!tasks || tasks.length === 0) ? (
        <li className="item">
          <span className="item__text">No tasks yet — add one above.</span>
        </li>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} id={task.id} text={task.text} onDelete={onDelete} />
        ))
      )}

      {/* Task 2 & 3 – Map tasks to TaskItem */}

      {/* Task 2 & 3 – Map tasks to TaskItem */}
      
    </ul>
  );
}
