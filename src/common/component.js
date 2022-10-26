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

export const Input = styled.input`
  width: ${(props) => props.width || "350px"};
  height: ${(props) => props.height || "40px"};
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 3px;
  padding: 5px;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: "SCD-4";
  margin: 0 10px 0 10px;
`;

export const InputDiv = styled.div`
  width: ${(props) => props.width || "702px"};
  height: ${(props) => props.height || "80px"};
  display: flex;
  flex-direction: ${(props) => props.dir || "row"};
  justify-content: ${(props) => props.juc || "space-between"};
  align-items: ${(props) => props.ali || "baseline"};
  border-left: ${(props) => props.border || "1px solid lightgray"};
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
`;

export const Title = styled.div`
  width: ${(props) => props.width || "141px"};
  height: ${(props) => props.height || "80px"};
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5rem;
  font-family: "SCD-6";
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 18px;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  & > span {
    color: red;
    font-family: "SCD-6";
    font-size: 1.5rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "row"};
`;

export const Select = styled.select`
  font-family: "SCD-4";
  width: 100px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 0.3rem;
  padding: 5px;
  font-size: 1.5rem;
  margin: 0 10px 0 10px;
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 10px;
  input {
    width: 18px;
    height: 18px;
    accent-color: green;
  }
  label {
    font-family: "SCD-3";
    font-size: 1.3rem;
    padding: 0 20px 0 5px;
  }
`;

export const Img = styled.div`
  width: 155px;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px 0 10px;
  & > div {
    width: 155px;
    height: 155px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.gray};
    & > img {
      width: 100%;
      height: 100%;
      margin: "auto";
    }
  }
  & > p {
    font-family: "SCD-4";
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const Checkbox = styled.div`
  width: ${(props) => props.width || "inheirt"};
  height: ${(props) => props.height || "60px"};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  & > input {
    width: ${(props) => props.width || "30px"};
    height: ${(props) => props.height || "30px"};
    margin: 0 10px 0 10px;
    accent-color: green;
  }
  & > p {
    font-family: ${(props) => props.font || "SCD-3"};
    font-size: ${(props) => props.fontSize || "1.5rem"};
  }
`;

export const InputBox = ({ type, width, height }) => {
  return <Input type={type} width={width} height={height}></Input>;
};
export const TitleBox = ({ children, height, width }) => {
  return (
    <Title width={width} height={height}>
      {children}
    </Title>
  );
};

export const InputDivBox = ({
  children,
  dir,
  width,
  height,
  juc,
  ali,
  border,
}) => {
  return (
    <InputDiv
      dir={dir}
      width={width}
      height={height}
      juc={juc}
      ali={ali}
      border={border}
    >
      {children}
    </InputDiv>
  );
};

export const ColumnBox = ({ children, dir }) => {
  return <Column dir={dir}>{children}</Column>;
};

export const SelectBox = ({ children }) => {
  return <Select>{children}</Select>;
};

export const RadioButton = ({ type, children, name }) => {
  return (
    <Radio>
      <input type={type} name={name}></input>
      <label>{children}</label>
    </Radio>
  );
};

export const ImgBox = ({ children }) => {
  return <Img>{children}</Img>;
};

export const CheckboxDiv = ({
  type,
  children,
  width,
  height,
  font,
  fontSize,
}) => {
  return (
    <Checkbox>
      <input type={type} width={width} height={height}></input>
      <p font={font} fontSize={fontSize}>
        {children}
      </p>
    </Checkbox>
  );
};

// export default InputBox & TitleBox & InputDivBox & ColumnBox & SelectBox & RadioButton & ImgBox & CheckboxDiv;
