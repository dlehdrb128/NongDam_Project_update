import styled from 'styled-components';
import AdminBox from '../../common/AdminBox';
import { Link } from 'react-router-dom';


// 전체 감싼 메인 박스
const MainBox = styled.div`
  width: inherit;
  padding-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // 스토어관리 메인 제목
  & > h1 {
    width: 900px;
    padding-bottom: 40px;
    text-align: center;
    font-family: 'SCD-6';
    font-size: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    color: ${({ theme }) => theme.lightblack};
  }

  // 스토어관리 박스들 한번에 묶은
  & > div {
    width: 950px;
    height: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    padding-top: 70px;
  }
`;

const AdminMain = () => {
  return (
    <MainBox>
      <h1>스토어관리</h1>
      <div>
        <Link to='create'>
          <AdminBox
            src='http://localhost:8080/icon/Admin_icon1.png'
            name='스토어개설'
            content='기본 스토어 개설'
          ></AdminBox>
        </Link>
        <AdminBox
          src='http://localhost:8080/icon/Admin_icon2.png'
          name='스토어관리'
          content='기본 스토어 관리'
        ></AdminBox>
        <Link to='newproduct'>
          <AdminBox
            src='http://localhost:8080/icon/Admin_icon3.png'
            name='상품관리'
            content='상품등록, 수정'
          ></AdminBox>
        </Link>
        <AdminBox
          src='http://localhost:8080/icon/Admin_icon4.png'
          name='게시판관리'
          content='공지사항, 후기 관련'
        ></AdminBox>
        <AdminBox
          src='http://localhost:8080/icon/Admin_icon5.png'
          name='정산'
          content='판매현황, 금액 관리'
        ></AdminBox>
        <AdminBox
          src='http://localhost:8080/icon/Admin_icon6.png'
          name='마이페이지'
          content='나의 회원정보 수정'
        ></AdminBox>
      </div>
    </MainBox>
  );
};

export default AdminMain;
