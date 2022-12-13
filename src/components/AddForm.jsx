import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todoList";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  //   todoList 값 가져오기
  const globalTodo = useSelector((state) => state.todoList.todo);
  console.log(globalTodo);

  //   input에 입력한 값 받기
  const onChangeHandler = (e) => {
    // input(제목, 내용)에 입력된 값 받기
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  };

  // 추가하기 버튼을 누르면 새로운 ToDo가 추가
  const onAddToDoHandler = (e) => {
    // 제목과 내용이 모두 입력되었을 때
    if (title && content) {
      e.preventDefault();
      dispatch(
        addTodo({ id: globalTodo.length + 1, title, content, isDone: false })
      );
      // input 초기화
      setTitle("");
      setContent("");
    }

    // 제목과 내용이 모두 비었을 때 - 제목에 focus
    else if (!title && !content) {
      e.preventDefault();
      document.querySelector("#title").focus();
      alert("제목과 내용을 입력해주세요");
    }

    // 제목이 비었을 때 - 내용에 focus
    else if (!title) {
      e.preventDefault();
      document.getElementById("title").focus();
      alert("제목을 입력해주세요");
    }

    // 내용이 비었을 때  - 제목에 focus
    else if (!content) {
      e.preventDefault();
      document.getElementById("content").focus();
      alert("내용을 입력해주세요");
    }
  };

  return (
    <div className="add-todo-box">
      <form onSubmit={onAddToDoHandler}>
        <div className="input-box">
          <h3>제목</h3>

          <input
            placeholder="제목을 입력해주세요."
            id="title"
            value={title}
            onChange={onChangeHandler}
          />
          <h3>내용</h3>
          <input
            className="input-text"
            placeholder="내용을 입력해주세요."
            id="content"
            value={content}
            onChange={onChangeHandler}
          />
        </div>

        <button>추가하기</button>
      </form>
    </div>
  );
};

export default AddForm;
