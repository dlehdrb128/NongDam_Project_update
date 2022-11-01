import styled from 'styled-components';

const ContentBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 기입내용의 제목을 h2
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수 기입내용 *로 표현한 부분을 span으로 감싸줌
    // span있는거만 적용됨
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // 기입내용 input을 div로 묶음
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.liglightgray};
    // 기입내용 input 박스 설정
    & > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    //  input박스 뒤에 따로 특이사항 붙는 부분
    // span 추가해서 설정하면되고, 없어도 상관없음
    & > span {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding-left: 5px;
    }
  }
`;

// 스토어 설명 박스
const StoreDescBox = styled.div`
  width: inherit;
  height: 200px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 기입내용의 제목을 h2
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수 기입내용 *로 표현한 부분을 span으로 감싸줌
    // span있는거만 적용됨
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // 기입내용 input을 div로 묶음
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.liglightgray};
    // 기입내용 input 박스 설정
    & > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 150px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    //  input박스 뒤에 따로 특이사항 붙는 부분
    // span 추가해서 설정하면되고, 없어도 상관없음
    & > span {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding-left: 5px;
    }
  }
`;

// 사업장 주소 input부분은 형식이 달라서 따로 지정
const BusinessAdd = styled.div`
  width: inherit;
  height: 208px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 큰 틀을 비슷
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 0.1rem solid ${({ theme }) => theme.lightgray};
    // 이거 역시 필수기입내용 * 표시
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // 사업장 주소를 입력 받을 박스
  & > div {
    width: inherit;
    padding: 22px 20px 22px 20px;
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // 우편번호 창
    & > div > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 주소 검색 버튼
    & > div > button {
      width: 120px;
      height: 40px;
      font-size: 1.5rem;
      font-family: 'SCD-6';
      color: ${({ theme }) => theme.realWhite};
      background-color: ${({ theme }) => theme.green};
      border: none;
      border-radius: 3px;
      margin-left: 15px;
      padding: 5px;
      cursor: pointer;
    }
    // 전체주와 나머지 주소 받을 input
    & > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;
const ImgBox = styled.div`
  width: inherit;
  height: 260px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 제목 - 대표이미지 등록
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수기입사항
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // input받을 내용 담긴 box
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.liglightgray};
    // 사진부분
    & > div:nth-child(1) {
      width: 155px;
      height: 192px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      //사진미리보기 부분/ 지금은 회색 박스
      & > div {
        width: 155px;
        height: 155px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        & > img {
          width: 100%;
          height: 100%;
          margin: 'auto';
        }
      }
      // 이미지 권장 사이즈 안내
      & > p {
        font-family: 'SCD-4';
        text-align: center;
        font-size: 1.5rem;
      }
    }
    // 등록 부분
    & > div:nth-child(2) {
      width: 496px;
      height: 192px;
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-bottom: 40px;
      justify-content: flex-end;
      // 파일불러오는 input 버튼
      & > label {
        width: 73px;
        height: 30px;
        background-color: ${({ theme }) => theme.green};
        color: ${({ theme }) => theme.realWhite};
        text-align: center;
        border-radius: 3px;
        font-family: 'SCD-6';
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      // 등록이미지 안내
      & > p {
        font-family: 'SCD-5';
        font-size: 1.3rem;
        padding-top: 5px;
      }
    }
  }
`;
// 전화번호 들어가는 박스
const TelBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 전화번호 타이틀
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // *로 된 필수입력사항
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // input을 묶은 div
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    // 번호의 맨 앞자리 선택박스
    & > select {
      font-family: 'SCD-4';
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 0.3rem;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 전화번호 개인 입력창
    & > input {
      font-family: 'SCD-4';
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 전화번호 사이사이 - 표시
    & > span {
      font-family: 'SCD-4';
      padding: 0 10px 0 10px;
      font-size: 1.5rem;
    }
    // 인증번호 받는 버튼
    & > button {
      width: 120px;
      height: 40px;
      font-family: 'SCD-6';
      font-size: 1.5rem;
      color: ${({ theme }) => theme.realWhite};
      background-color: ${({ theme }) => theme.green};
      border: none;
      border-radius: 3px;
      padding: 5px;
      margin-left: 15px;
      cursor: pointer;
    }
  }
`;

// 라디오 버튼 들어가는 박스
const RadioBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 타이틀
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // * 표시 필수입력사항
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // input 묶을 div
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    // 라디오 버튼 스타일링
    & > input {
      width: 18px;
      height: 18px;
      accent-color: green;
    }
    // 체크되면 달라지는 스타일링
    // 라디오 버튼의 내용
    & > label {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding: 0 20px 0 5px;
    }
  }
`;
const DetailBox = styled.div`
  width: inherit;
  height: 494px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.lightblack};
  & > h2 {
    width: inherit;
    height: 85px;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수입력사항
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  & > div {
    width: inherit;
    height: 390px;
    border-bottom: 1.5px solid ${({ theme }) => theme.lightblak};
  }
`;

// 할인적용 - 할인유형을 고를 수 있는 select
// 전체 큰 박스로 묶음
const SelectBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 할인유형
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }

  // select 박스부분 전체 묶은 div
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.lightblack};

    // select박스 부분
    & > select {
      font-family: 'SCD-4';
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 0.3rem;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;

// 할인적용 - 기간 설정 부분
const PeriodSet = styled.div`
  width: inherit;
  height: 163px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 기간설정
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 0.1rem solid ${({ theme }) => theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // 기간설정 세부내용 다 묶은 박스
  & > div {
    width: 702px;
    height: inherit;
    padding: 22px 20px 22px 20px;
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // 날짜 박스 묶은 div 두 개 있는 데 둘 다 같은 구조로 되어있어서
    // div로 같이 설정
    & > div {
      display: flex;
      width: inherit;
      height: 50px;
      align-items: center;

      // input 박스가 들어있는 div
      & > div:nth-child(1) {
        // input 설정
        & > input {
          width: 187px;
          height: 40px;
          border-radius: 3px;
          font-family: 'SCD-3';
          font-size: 1.3rem;
          padding: 5px;
          margin-right: 10px;
        }
      }
      // select 스타일링
      & > select {
        font-family: 'SCD-3';
        width: 68px;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.gray};
        border-radius: 0.3rem;
        padding: 5px;
        font-size: 1.5rem;
        margin-right: 10px;
      }
      // select 박스 뒤에 글자들 ex)시, 분
      & > span {
        font-family: 'SCD-3';
        font-size: 1.5rem;
        margin-right: 10px;
      }
    }
  }
`;
export {
  ContentBox,
  StoreDescBox,
  TelBox,
  RadioBox,
  BusinessAdd,
  ImgBox,
  DetailBox,
  SelectBox,
  PeriodSet,
};
