import React from "react";
import AddForm from "../../redux/components/AddForm";
import TodoContainer from "../../redux/components/TodoContainer";
import { Main } from "./style";

const ToDoList = () => {
  return (
    <Main>
      {/* ToDo μΆκ°νλ input form */}
      <AddForm />

      {/* Working Todo List */}
      <TodoContainer isActive={true} />

      {/* Done Todo List */}
      <TodoContainer isActive={false} />
    </Main>
  );
};

export default ToDoList;
