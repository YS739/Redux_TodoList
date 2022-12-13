import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todoList";

const TodoContainer = () => {
  const dispatch = useDispatch();

  // TodoList 값 가져오기
  const globalTodo = useSelector((state) => state.todoList.todo);

  // 삭제하기 버튼을 눌렀을 때
  const deleteToDo = (id) => {
    const newToDoList = globalTodo.filter((toDo) => toDo.id !== id);
    dispatch(deleteTodo(newToDoList));
  };

  // 완료, 취소 버튼 눌렀을 때
  const switchList = (id) => {
    const switchToDo = globalTodo.map((toDo) => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isDone: !toDo.isDone,
        };
      } else {
        return { ...toDo };
      }
    });
    dispatch(switchTodo(switchToDo));
  };

  return (
    <div>
      <div className="list-container">
        {globalTodo.map(
          (toDo) =>
            //map으로 돌면서 isDone이 존재하는(&&) ToDoCards를 반환!
            toDo.isDone === toDo.isDone && (
              <div key={toDo.id} className="list-box">
                <div className="content-text">
                  <h2>{toDo.title}</h2>
                  <h4>{toDo.content}</h4>
                </div>
                <div className="buttons">
                  <button onClick={() => deleteToDo(toDo.id)}>삭제하기</button>
                  <button onClick={() => switchList(toDo.id)}>
                    {toDo.isDone ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
