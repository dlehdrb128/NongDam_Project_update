import styled from 'styled-components';
import { Test } from '../../common/component';

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
      <Test type={'email'}>인풋</Test>
    </>
  );
};

export default HomePage;
