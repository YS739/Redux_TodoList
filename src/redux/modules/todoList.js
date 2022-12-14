import { v4 as uuidv4 } from "uuid";

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// Action Creator
// todo 추가하기
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// todo 삭제하기
export const deleteTodo = (payload) => {
  console.log(payload);
  return {
    type: DELETE_TODO,
    payload,
  };
};

// todo 상태 변경하기
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  todo: [
    {
      id: uuidv4(),
      title: "리액트",
      content: "리액트 과제 다시 하기",
      isDone: false,
    },
    { id: uuidv4(), itle: "독서하기", content: "IT책 10장 읽기", isDone: true },
  ],
};

// Reducer
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        //   const newToDoList = globalTodo.filter((toDo) => toDo.id !== id);
        ...state,
        todo: [...state.todo, action.payload],
      };
    case SWITCH_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};

// export default reducer
export default todoList;
