// todo 상세 페이지
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Todo = () => {
  const global = useSelector((state) => state.TodoS.todo);
  const param = useParams();

  const theTodo = global.find((list) => list.id === param.id);

  return (
    <div>
      <div>
        ID: {theTodo.id.slice(0, 8)}
        <Link to="/"> Go Todo List</Link>
      </div>
      <div>{theTodo.title}</div>
      <div>{theTodo.content}</div>
    </div>
  );
};

export default Todo;
