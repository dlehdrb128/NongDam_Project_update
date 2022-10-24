import styled from "styled-components";

// 홈페이지
const MainBox = styled.main`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <>
      <MainBox>안녕!</MainBox>
    </>
  );
};

export default HomePage;
