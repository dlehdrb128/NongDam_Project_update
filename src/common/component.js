import styled from "styled-components";
import Theme from "../Theme/theme";

export const ButtonStyled = styled.button`
  /* 버튼 */
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "40px"};
  border: none;
  background-color: ${(props) => props.bgColor || `${props.theme.green}`};
  color: ${(props) => props.color || `${props.theme.realWhite}`};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: ${(props) => props.fontFamily || "SCD-3"};
  cursor: ${(props) => props.cursor || "pointer"};
  &:hover {
    background-color: ${(props) =>
      props.hverBgColor || `${props.theme.orange}`};
  }
`;
export const InputStyled = styled.div`
  /* 기본 인풋 */
  width: ${(props) => props.width || "1230px"};
  height: ${(props) => props.height || "80px"};
  border-top: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightblack}`};
  background-color: ${({ theme }) => theme.bgColor};
  color: ${(props) => props.color || `${props.theme.green}`};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: ${(props) => props.fontFamily || "SCD-3"};
  display: flex;

  & > div:nth-child(1) {
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "80px"};
    border-bottom: ${(props) =>
      props.borderBottom || `1px solid ${props.theme.lightblack}`};
    background-color: #eee;
    border-right: 1px solid ${({ theme }) => theme.lightblack};
    color: ${({ theme }) => theme.lightblack};
    font-size: ${(props) => props.fontSize || "2rem"};
    font-family: ${(props) => props.fontFamily || "SCD-3"};
    padding-left: 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    & > span {
      color: red;
      font-size: ${(props) => props.fontSize || "2rem"};
      font-family: ${(props) => props.fontFamily || "SCD-3"};
    }
  }
  & > div:nth-child(2) {
    width: ${(props) => props.width || "1030px"};
    height: ${(props) => props.height || "80px"};
    color: ${(props) => props.color || `${props.theme.lightblack}`};
    font-size: ${(props) => props.fontSize || "1.5rem"};
    padding-left: 15px;
    background-color: white;
    border-bottom: ${(props) =>
      props.borderBottom || `1px solid ${props.theme.lightblack}`};
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const BigInputStyled = styled.div`
  /* 큰 인풋 */
  width: ${(props) => props.width || "1230px"};
  height: ${(props) => props.height || "180px"};
  border-top: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightblack}`};
  background-color: ${({ theme }) => theme.bgColor};
  color: ${(props) => props.color || `${props.theme.green}`};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: ${(props) => props.fontFamily || "SCD-3"};
  display: flex;

  & > div:nth-child(1) {
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "inherit"};
    border-bottom: ${(props) =>
      props.borderBottom || `1px solid ${props.theme.lightblack}`};
    background-color: #eee;
    border-right: 1px solid ${({ theme }) => theme.lightblack};
    color: ${({ theme }) => theme.lightblack};
    font-size: ${(props) => props.fontSize || "2rem"};
    font-family: ${(props) => props.fontFamily || "SCD-3"};
    padding-left: 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    & > span {
      color: red;
      font-size: ${(props) => props.fontSize || "2rem"};
      font-family: ${(props) => props.fontFamily || "SCD-3"};
    }
  }
  & > div:nth-child(2) {
    width: ${(props) => props.width || "1030px"};
    height: ${(props) => props.height || "inherit"};
    padding-left: 15px;
    background-color: white;
    border-bottom: ${(props) =>
      props.borderBottom || `1px solid ${props.theme.lightblack}`};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
`;
export const LongInput = styled.input`
  width: ${(props) => props.width || "360px"};
  height: ${(props) => props.height || "40px"};
  padding-left: 10px;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: ${(props) => props.fontFamily || "SCD-3"};
  color: ${({ theme }) => theme.lightblack};
`;
export const ShortsInput = styled.input`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "40px"};
  padding-left: 10px;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: ${(props) => props.fontFamily || "SCD-3"};
  color: ${({ theme }) => theme.lightblack};
`;
// export const test = styled.div`
//   background-color: ${(props) =>
//     props.bgColor || `${({ theme }) => theme.green}}`
// ;
export const Test = styled.div`
  background-color: ${(props) => props.bgColor || `${Theme.green}`};
`;

export default InputStyled & BigInputStyled & LongInput & ShortsInput;
// export default BigInputStyled;
// export default ShortsInput;
// export default LongInput;
