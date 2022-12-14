import React, { useState } from "react";
import Header from "../components/header/Header";
import AddForm from "../components/AddForm";
import TodoContainer from "../components/TodoContainer";
// import { Link } from "react-router-dom";

// const [toDoS, setToDoS] = useState([
//   { id: 0, title: "리액트", content: "리액트 과제 다시 하기", isDone: false },
//   { id: 1, title: "독서", content: "IT책 10장 읽기", isDone: true },
// ]);

const ToDoList = () => {
  return (
    <div>
      <Header />

      {/* ToDo 추가하는 input form */}
      <AddForm />

      {/* Working Todo List */}
      <TodoContainer isActive={true} />

      {/* Done Todo List */}
      <TodoContainer isActive={false} />
    </div>
  );
};

export default ToDoList;
