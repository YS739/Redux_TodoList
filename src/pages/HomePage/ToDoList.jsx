import React from "react";
import AddForm from "../../redux/modules/AddForm";
import TodoContainer from "../../redux/modules/TodoContainer";
import styled from "styled-components";

const ToDoList = () => {
  return (
    <Main>
      {/* ToDo 추가하는 input form */}
      <AddForm />

      {/* Working Todo List */}
      <TodoContainer isActive={true} />

      {/* Done Todo List */}
      <TodoContainer isActive={false} />
    </Main>
  );
};

export default ToDoList;

// styled-components
const Main = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;
