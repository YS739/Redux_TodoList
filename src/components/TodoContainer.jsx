import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todoList";

const TodoContainer = ({ isActive }) => {
  const dispatch = useDispatch();

  // TodoList 값 가져오기
  const globalTodo = useSelector((state) => state.todoList.todo);

  // 삭제하기 버튼을 눌렀을 때
  const handleDeleteToDo = (id) => {
    dispatch(deleteTodo(id));
  };

  // 완료, 취소 버튼 눌렀을 때
  const handleSwitchState = (id) => {
    const switchState = globalTodo.map((toDo) => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isDone: !toDo.isDone,
        };
      } else {
        return { ...toDo };
      }
    });
    dispatch(switchTodo(switchState));
    // 여기도 여기서 map 쓸 게 아니라 해당 id, isDone 값을 dispatch로 넘겨서
    // Reducer에서 걸러진 값을 반환하기
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
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoContainer;
