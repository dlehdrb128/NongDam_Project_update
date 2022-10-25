import styled from 'styled-components';
import SetSidemenu from '../../common/SetSidemenu';
import SetMypageTop from '../../common/SetMypageTop';
import SetMypageList from '../../common/SetMypageList';

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
      <div>
        <SetMypageTop />
        <SetSidemenu Text={'그냥만듬'}></SetSidemenu>
        <SetMypageList></SetMypageList>
      </div>
    </>
  );
};

export default HomePage;
