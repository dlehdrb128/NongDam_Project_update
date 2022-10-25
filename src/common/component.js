import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) => props.width || '350px'};
  height: ${(props) => props.height || '40px'};
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 3px;
  padding: 5px;
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-family: 'SCD-4';
  margin: 0 10px 0 10px;
`;

const InputDiv = styled.div`
  width: ${(props) => props.width || '702px'};
  height: ${(props) => props.height || '80px'};
  display: flex;
  flex-direction: ${(props) => props.dir || 'row'};
  justify-content: ${(props) => props.juc || 'space-between'};
  align-items: ${(props) => props.ali || 'baseline'};
  border-left: ${(props) => props.border || '1px solid lightgray'};
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
`;

const Title = styled.div`
  width: ${(props) => props.width || '141px'};
  height: ${(props) => props.height || '80px'};
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5rem;
  font-family: 'SCD-6';
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 18px;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  & > span {
    color: red;
    font-family: 'SCD-6';
    font-size: 1.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || 'row'};
`;

const Select = styled.select`
  font-family: 'SCD-4';
  width: 100px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 0.3rem;
  padding: 5px;
  font-size: 1.5rem;
  margin: 0 10px 0 10px;
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 10px;
  input {
    width: 18px;
    height: 18px;
    accent-color: green;
  }
  label {
    font-family: 'SCD-3';
    font-size: 1.3rem;
    padding: 0 20px 0 5px;
  }
`;

const Img = styled.div`
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
      margin: 'auto';
    }
  }
  & > p {
    font-family: 'SCD-4';
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Checkbox = styled.div`
  width: ${(props) => props.width || 'inheirt'};
  height: ${(props) => props.height || '60px'};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  & > input {
    width: ${(props) => props.width || '30px'};
    height: ${(props) => props.height || '30px'};
    margin: 0 10px 0 10px;
    accent-color: green;
  }
  & > p {
    font-family: ${(props) => props.font || 'SCD-3'};
    font-size: ${(props) => props.fontSize || '1.5rem'};
  }
`;

const InputBox = ({ type, width, height }) => {
  return <Input type={type} width={width} height={height}></Input>;
};
const TitleBox = ({ children, height, width }) => {
  return (
    <Title width={width} height={height}>
      {children}
    </Title>
  );
};

const InputDivBox = ({ children, dir, width, height, juc, ali, border }) => {
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

const ColumnBox = ({ children, dir }) => {
  return <Column dir={dir}>{children}</Column>;
};

const SelectBox = ({ children }) => {
  return <Select>{children}</Select>;
};

const RadioButton = ({ type, children, name }) => {
  return (
    <Radio>
      <input type={type} name={name}></input>
      <label>{children}</label>
    </Radio>
  );
};

const ImgBox = ({ children }) => {
  return <Img>{children}</Img>;
};

const CheckboxDiv = ({ type, children, width, height, font, fontSize }) => {
  return (
    <Checkbox>
      <input type={type} width={width} height={height}></input>
      <p font={font} fontSize={fontSize}>
        {children}
      </p>
    </Checkbox>
  );
};

export {
  InputBox,
  TitleBox,
  InputDivBox,
  ColumnBox,
  SelectBox,
  RadioButton,
  ImgBox,
  CheckboxDiv,
};
