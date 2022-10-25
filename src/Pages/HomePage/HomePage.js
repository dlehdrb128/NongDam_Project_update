import styled from 'styled-components';

// 홈페이지
const MainBox = styled.main`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 60%;
    display: flex;
    flex-direction: row;
  }
`;

const HomePage = () => {
  return (
    <>
      <MainBox>안녕!</MainBox>
    </>
  );
};

export default HomePage;
