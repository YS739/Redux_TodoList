import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <h1>My ToDo List</h1>
    </Head>
  );
};

export default Header;

// styled-components
const Head = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 40px;
`;
