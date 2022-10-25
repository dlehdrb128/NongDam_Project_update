import { ButtonStyled, LongInput, ShortsInput } from "../../common/component";
import { MainButton, BasicButton, SmallButton } from "../../common/button";
import styled from "styled-components";
import { BasicImg } from "../../common/img";
const Parent = styled.div`
  width: 1230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Test2 = () => {
  return (
    <Parent>
      <BasicButton>gkd</BasicButton>
      <SmallButton>앙</SmallButton>
      <MainButton>잉양진</MainButton>
      <BasicImg src="./img/카메라.png"></BasicImg>
    </Parent>
  );
};

export default Test2;
