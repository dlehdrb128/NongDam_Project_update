import styled from "styled-components";
import { InputBox, TitleBox } from "../../common/component";

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
      <InputBox type={"email"}>인풋</InputBox>
      <TitleBox>
        이름<span>*</span>
      </TitleBox>
    </>
  );
};

export default HomePage;
