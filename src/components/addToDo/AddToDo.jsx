import "./style.css";
import CustomButton from "../customButton/CustomButton";

const AddToDo = ({
  title,
  content,
  setTitle,
  setContent,
  onAddToDoHandler,
}) => {
  const onChangeHandler = (e) => {
    // input(제목, 내용)에 입력된 값 받기
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  };

  return (
    <div className="add-todo-box">
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

      <CustomButton btnName="add" onClick={onAddToDoHandler}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default AddToDo;
