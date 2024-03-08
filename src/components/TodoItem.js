import React, {useState}  from "react";


const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const [isCompleted, setIsCompleted] = useState(completed);

  const cssStyle = {
    textDecoration: isCompleted ? "line-through" : "none",
  };

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    props.markComplete(id);
  };

  const handleDelete = () => {
    props.deleteItem(id);
  };

  return (
    <div style={cssStyle}>
      <p>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isCompleted}
        />{" "}
        {title}{" "}
        <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
};

export default TodoItem;