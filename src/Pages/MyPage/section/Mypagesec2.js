import styled from 'styled-components';
import SetMypageTop from '../../../common/SetMypageTop'
import SetMypageList from '../../../common/SetMypageList';
import Mypagese2OrderState from './Mypagesec2OrderState'


// Mypage 섹션 1 컨테이너(사이즈,위치조정)
const Section2 = styled.section`
  padding-top: 125px;
  width: 867px;
`;
const Mypagesec2 = ({ data, userData }) => {
  return (
    <Section2>
      <SetMypageTop data={data} userData={userData} />
      {/* 회원정보 */}
      <Mypagese2OrderState data={data} />
      {/* 주문처리현황 */}
      <SetMypageList recent={true} Text={'최근 주문 정보'}></SetMypageList>
      {/* 최근주문정보 */}
    </Section2>
  );
};
//end

export default Mypagesec2;