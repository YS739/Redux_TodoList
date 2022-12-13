// Action Value
const DELETE_TODO = "DELETE_TODO";

// Action Creator

// todo 삭제하기
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Initial State

// Reducer

// export default reducer
