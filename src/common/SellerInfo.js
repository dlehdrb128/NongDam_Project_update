/**
 * 판매자 정보 컴포넌트입니다.
 * Data 받아서 해당 컴포넌트에 적용하시면 됩니다.
 */

import styled from "styled-components"

const InfoBox = styled.div`
  // 전체 테이블 컨테이너
  &>h1{
    font-family: SCD-6;
    font-size: ${({ theme }) => theme.fontSize_25};
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 30px;
  }
  //테이블 타이틀 (폰트,폰트사이즈,컬러,간격조정)
  &>div{
    width: 1229px;
    display: flex;
    justify-content:space-between;
    //테이블 컨테이너(너비,위치조정)
    &>div{
      width: 50%;
      //부모 기준 50%의 너비를 가짐
      &>div{
        color:${({ theme }) => theme.lightblack};
        display: flex;
        border-bottom: 1px solid ${({ theme }) => theme.gray};
        //row 컨테이너 (컬러,위치조정)
        &>div:nth-child(1){
          width: 30%;
          background-color: ${({ theme }) => theme.white};
          padding: 30px 0px;
          border-right :1px solid ${({ theme }) => theme.gray};
          //row title 부분 (너비,위치값,컬러조정)
          &>p{
            text-align: center;
            font-family: SCD-5;
            font-size: ${({ theme }) => theme.fontSize_18};
            margin: 0;
            //row title 부분 (텍스트 정렬,폰트,폰트사이즈,간격)
          }
        }
        &>div:nth-child(2){
          width: 70%;
          padding: 30px 30px;
          //row info 부분 (너비,위치값,컬러조정)
          &>p{
            font-family: SCD-4;
            font-size: ${({ theme }) => theme.fontSize_18};
            //row info 부분 (텍스트 정렬,폰트,폰트사이즈,간격)
          }
        }
      }
      &>div:nth-child(1){
        border-top: 3px solid ${({ theme }) => theme.gray};
      }
      &>div:last-child{
        border-bottom:3px solid ${({ theme }) => theme.gray};
      }
    }
    &>div:nth-child(1){
      &>div{
        border-left: 1px solid ${({ theme }) => theme.gray};
        border-right: 1px solid ${({ theme }) => theme.gray};
      }
    }
    &>div:nth-child(2){
      &>div{
        border-right: 1px solid ${({ theme }) => theme.gray};
      }
    }
  }
`

const SellerInfo = () => {
  return (
    <>
      <InfoBox>
        <h1>판매자 정보</h1>
        <div>
          <div>
            <div>
              <div><p>상호명</p></div>
              <div><p>상호네 농장</p></div>
            </div>
            <div>
              <div><p>사업자등록번호</p></div>
              <div><p>12345678</p></div>
            </div>
            <div>
              <div><p>대표전화</p></div>
              <div><p>000-000-0000</p></div>
            </div>
            <div>
              <div><p>E-mail</p></div>
              <div><p>abc@abc.com</p></div>
            </div>
          </div>
          {/* 좌측 테이블*/}
          <div>
            <div>
              <div><p>대표자</p></div>
              <div><p>이상호</p></div>
            </div>
            <div>
              <div><p>사업장 소재지</p></div>
              <div><p>비밀</p></div>
            </div>
            <div>
              <div><p>상담 전화</p></div>
              <div><p>000-000-0000</p></div>
            </div>
            <div>
              <div><p>CS 운영시간</p></div>
              <div><p>09:00~18:00</p></div>
            </div>
          </div>
        </div>
        {/* 우측 테이블 */}
      </InfoBox>
    </>
  )
}

export default SellerInfo