import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "40px"};
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 3px;
  padding: 5px;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: "SCD-4";
`;

const Title = styled.div`
  width: ${(props) => props.width || "141px"};
  height: ${(props) => props.height || "80px"};
  font-size: 1.5rem;
  font-family: "SCD-6";
  text-align: left;
  padding: 30px 0 30px 18px;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  & > span {
    color: red;
    font-family: "SCD-6";
    font-size: 1.5rem;
  }
`;

const InputBox = ({ type }) => {
  return <Input type={type}></Input>;
};
const TitleBox = ({ children }) => {
  return <Title>{children}</Title>;
};

export { InputBox, TitleBox };
