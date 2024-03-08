import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./TodoForm";

const TodoParent = (props) => {
  const [todo, setTodo] = useState([
    { id: 1, title: "Go out", completed: false },
    { id: 2, title: "Go home", completed: false },
    { id: 3, title: "Go to bed", completed: false },
    { id: 4, title: "Do hw", completed: false },
  ]);

  const guid = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  const deleteItem = (id) => {
    console.log("Delete from TodoParent " + id);
    setTodo(todo.filter(item => item.id !== id));
  }

  const markComplete = (id) => {
    console.log("MarkComplete from TodoParent " + id);
    setTodo(todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  }

  const addTodo = (newTitle) => {
    console.log("addTodo from TodoParent: " + newTitle);
    const nextIdNumber = todo.length + guid();
    const newTodoItem = { id: nextIdNumber, title: newTitle, completed: false };
    setTodo([...todo, newTodoItem]);
  };

  const makeOneTodoItem = (todoItemInfo) => (
    <TodoItem
      key={todoItemInfo.id}
      todo={todoItemInfo}
      markComplete={markComplete}
      deleteItem={deleteItem}
    />
  );

  return (
    <div>
      {todo.map(makeOneTodoItem)}
      <AddTodo addTodoItem={addTodo} />
    </div>
  );
}

export default TodoParent;