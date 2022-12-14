import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/TodoS";
import { Link } from "react-router-dom";

const TodoContainer = ({ isActive }) => {
  const dispatch = useDispatch();

  // TodoList 값 가져오기
  const globalTodo = useSelector((state) => state.TodoS.todo);

  // 삭제하기 버튼을 눌렀을 때
  const handleDeleteToDo = (id) => {
    dispatch(deleteTodo(id));
  };

  // 완료, 취소 버튼 눌렀을 때
  const handleSwitchState = (id) => {
    dispatch(switchTodo(id));
  };

  return (
    <div>
      <div className="list-container">
        <h2>{isActive ? "Working...🔥🔥🔥" : "Done 🎉🎉🎉"}</h2>
        {globalTodo
          .filter((todo) => todo.isDone === !isActive)
          .map((todo) => {
            return (
              <div key={todo.id} className="list-box">
                <div className="content-text">
                  <h2>{todo.title}</h2>
                  <h4>{todo.content}</h4>
                </div>
                <div className="buttons">
                  <button onClick={() => handleDeleteToDo(todo.id)}>
                    삭제하기
                  </button>
                  <button onClick={() => handleSwitchState(todo.id)}>
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                  {globalTodo.map((one) => {
                    return (
                      <div key={one.id}>
                        <Link to={`/works/${one.id}`}>
                          <span style={{ cursor: "pointer" }}>➡️ 상세보기</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoContainer;
