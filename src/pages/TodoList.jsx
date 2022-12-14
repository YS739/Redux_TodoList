import React from "react";
import Header from "../components/Header";
import AddForm from "../components/AddForm";
import TodoContainer from "../components/TodoContainer";

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
