// todo 상세 페이지
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Todo = () => {
  const global = useSelector((state) => state.TodoS.todo);
  console.log(global);
  const param = useParams();
  console.log(param);

  const theTodo = global.find((list) => list.id === param.id);
  console.log(theTodo);

  return (
    <div>
      <div>
        ID: {theTodo.id}
        <Link to="/">Todo List</Link>
      </div>
      <div>{theTodo.title}</div>
      <div>{theTodo.content}</div>
    </div>
  );
};

export default Todo;
