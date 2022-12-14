import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/TodoS";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "./CustomButton";

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
                {globalTodo.map((one) => {
                  return (
                    <div key={one.id}>
                      <Link to={`/${one.id}`}>
                        <span style={{ cursor: "pointer" }}>➡️ 상세보기</span>
                      </Link>
                    </div>
                  );
                })}
                <ContentText>
                  <h2>{todo.title}</h2>
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

// styled-components
const ListContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: top;

  margin-left: 20px;

  height: 350px;
`;

const AllList = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const ListBox = styled.div`
  width: 250px;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-right: 20px;
  margin-bottom: 20px;

  background-color: white;
  box-shadow: 1px 1px 2px 3px #e5dbff;

  border: 2px solid #e0bfe8;
  border-radius: 20px;
`;

const ContentText = styled.div`
  margin-left: 20px;
`;

const ButtonS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
