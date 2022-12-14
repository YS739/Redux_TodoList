import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../TodoS";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import {
  ListContainer,
  AllList,
  ListBox,
  ContentText,
  ButtonS,
  DetailLink,
} from "./style";

const TodoContainer = ({ isActive }) => {
  const dispatch = useDispatch();

  // TodoList 값 가져오기
  const globalTodo = useSelector((state) => state.TodoS.todo);

  // 삭제하기 버튼을 눌렀을 때
  const handleDeleteToDo = (id) => {
    const newTodo = globalTodo.filter((del) => del.id !== id);
    dispatch(deleteTodo(newTodo));
    console.log(newTodo);
  };

  // 완료, 취소 버튼 눌렀을 때
  const handleSwitchState = (id) => {
    const switchId = globalTodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return {
        ...todo,
      };
    });
    dispatch(switchTodo(switchId));
  };

  return (
    <ListContainer>
      <h2>{isActive ? "Working...🔥🔥🔥" : "Done 🎉🎉🎉"}</h2>
      <AllList>
        {globalTodo
          .filter((todo) => todo.isDone === !isActive)
          .map((todo) => {
            return (
              <ListBox key={todo.id}>
                <Link to={`/${todo.id}`} style={{ fontWeight: "bold" }}>
                  <DetailLink>➡️ 상세보기</DetailLink>
                </Link>

                <ContentText>
                  <h2 style={{ marginTop: 0 }}>{todo.title}</h2>
                  <h4>{todo.content}</h4>
                </ContentText>
                <ButtonS>
                  <CustomButton
                    btnName="delSwitch"
                    onClick={() => handleDeleteToDo(todo.id)}
                  >
                    삭제하기
                  </CustomButton>
                  <CustomButton
                    btnName="delSwitch"
                    onClick={() => handleSwitchState(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </CustomButton>
                </ButtonS>
              </ListBox>
            );
          })}
      </AllList>
    </ListContainer>
  );
};

export default TodoContainer;