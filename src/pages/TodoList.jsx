import React from "react";
import AddForm from "../components/AddForm";
import TodoContainer from "../components/TodoContainer";
import styled from "styled-components";

const ToDoList = () => {
  return (
    <div>
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
