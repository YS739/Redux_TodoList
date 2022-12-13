// todo 상세 페이지

import { useParams } from "react-router-dom";

const toDoTest = [
  { id: 0, title: "리액트", content: "리액트 과제 다시 하기", isDone: false },
  { id: 1, title: "독서", content: "IT책 10장 읽기", isDone: true },
];

const Todo = () => {
  const param = useParams();

  const todo = toDoTest.find((todo) => todo.id === parseInt(param.id));

  return <div>{(todo.title, todo.content)}</div>;
};

export default Todo;
