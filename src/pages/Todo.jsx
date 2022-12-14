// todo 상세 페이지
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Todo = () => {
  const global = useSelector((state) => state.TodoS.todo);
  const param = useParams();

  const theTodo = global.find((list) => list.id === param.id);

  return (
    <DetailBox>
      <CardHead>
        ID: {theTodo.id.slice(0, 8)}
        <Link to="/">
          <TodoLink>➡️ Todo List</TodoLink>
        </Link>
      </CardHead>
      <CardMain>
        <h2 style={{ margin: "0 auto" }}>
          {theTodo.isDone === false ? "Working🔥" : "Done🎉"}
        </h2>
        <h1>제목: {theTodo.title}</h1>
        <h2>내용: {theTodo.content}</h2>
      </CardMain>
    </DetailBox>
  );
};

export default Todo;

// styled-components
const DetailBox = styled.div`
  width: 460px;
  height: 300px;

  display: flex;
  flex-direction: column;
  margin: 0 auto;

  background-color: white;
  box-shadow: 1px 1px 2px 3px #e5dbff;

  border: 2px solid #e0bfe8;
  border-radius: 20px;
`;

const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  font-size: 20px;
`;

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 5px;
  margin-left: 30px;

  line-height: 35px;
`;

const TodoLink = styled.span`
  float: right;
  margin-right: 15px;

  color: black;

  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 3px purple;
  }
`;
