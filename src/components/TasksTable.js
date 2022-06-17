import React from "react";
import { TaskRow } from "./TaskRow";

export const TasksTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const tasksTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{tasksTableRows(showCompleted)}</tbody>
    </table>
  );
};
