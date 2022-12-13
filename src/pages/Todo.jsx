// todo 상세 페이지
import { useParams } from "react-router-dom";

// 여기서 useState를 쓰면 상위 컴포넌트에서 쓸 수 없다고 나온다.
// 데이터를 서로 연결해야 하는데!!
const toDoS = [
  { id: 0, title: "리액트", content: "리액트 과제 다시 하기", isDone: false },
  { id: 1, title: "독서", content: "IT책 10장 읽기", isDone: true },
];

const Todo = () => {
  const param = useParams();

  const todo = toDoS.find((todo) => todo.id === parseInt(param.id));

  return <div>{todo.content}</div>;
};

export default Todo;
