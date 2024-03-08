import React, { useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    props.addTodoItem(task);
    setTask(""); // clear input
  };

  return (
    <div>
      <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={handleAddTodo}>
        {" + "}
      </button>
    </div>
  );
};

export default TodoForm;
