import React from "react";

const LessonTasks = () => {
  const tasks = [
    { id: "task-1", text: "Открыть проект", done: true },
    { id: "task-2", text: "Проверить HomePage", done: false },
    { id: "task-3", text: "Собрать список", done: true },
  ];

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={task.done ? { textDecoration: "line-through" } : {}}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default LessonTasks;
