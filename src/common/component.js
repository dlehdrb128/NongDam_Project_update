import styled from 'styled-components';

const TestInput = styled.input`
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '40px'};
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 3px;
  padding: 5px;
  font-size: 1.5rem;
  font-family: 'SCD-4';
`;

export const Test = ({ type }) => {
  return <TestInput type={type}></TestInput>;
};
