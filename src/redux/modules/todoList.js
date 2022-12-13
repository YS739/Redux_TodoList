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
    { id: 0, title: "리액트", content: "리액트 과제 다시 하기", isDone: false },
    { id: 1, title: "독서", content: "IT책 10장 읽기", isDone: true },
  ],
};

// Reducer
const todoList = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_TODO:
    //   return {};
    // case DELETE_TODO:
    //   return {};
    // case SWITCH_TODO:
    //   return {};
    default:
      return state;
  }
};

// export default reducer
export default todoList;
