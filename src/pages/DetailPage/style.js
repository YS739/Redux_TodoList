import styled from "styled-components";

// styled-components
const DetailBox = styled.div`
  width: 460px;
  height: 300px;

  display: flex;
  flex-direction: column;
  margin: 100px auto;

  background-color: white;
  box-shadow: 1px 1px 2px 3px #e5dbff;

  border: 2px solid #e0bfe8;
  border-radius: 20px;
`;

const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  font-size: 20px;
`;

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 5px;
  margin-left: 30px;

  line-height: 35px;

  span {
    margin: 0 auto;
    color: #db8af0df;
    font-size: 32px;
  }
`;

const GoTodo = styled.button`
  float: right;
  margin-right: 15px;

  color: black;
  cursor: pointer;

  :hover {
    text-shadow: 3px 3px 4px #b197fc;
  }

  background-color: transparent;
  border: none;
  font-size: 17px;
  font-weight: 600;
`;

export { DetailBox, CardHead, CardMain, GoTodo };
