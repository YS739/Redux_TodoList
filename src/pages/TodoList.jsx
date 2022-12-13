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

      {/* isDone을 false, true로 나눠서 toDoBox에서 받아올 때 isDone에 따라 보여주기 */}
      <h2>Working...🔥🔥🔥</h2>
      <TodoContainer />

      {/* 상세 페이지 연결 시도 - return문이 또 있으니까 이건 TodoBox로 옮기든 하기*/}
      {/* {toDoS.map((todo) => {
        return (
          <div key={todo.id}>
            <Link to={`/${todo.id}`}>
              <span style={{ cursor: "pointer" }}>상세페이지</span>
            </Link>
          </div>
        );
      })} */}

      <h2>Done 🎉🎉🎉</h2>
      {/* <TodoContainer /> */}
    </div>
  );
};

export default ToDoList;
