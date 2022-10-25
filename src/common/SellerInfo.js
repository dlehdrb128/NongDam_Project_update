import styled from "styled-components"
// import { useState, useEffect } from 'react'

const InfoBox = styled.div`
  width: 1229px;
  display: flex;
  justify-content: space-between;
  &>div{
    width: 50%;
    &>div{
      color:${({ theme }) => theme.lightblack};
      display: flex;
      border-bottom: 1px solid ${({ theme }) => theme.lightblack};
      &>div:nth-child(1){
        width: 80%;
        background-color: ${({ theme }) => theme.white};
        width: 20%;
        padding: 30px 0px;
        text-align: center;
        &>p{
          font-family: SCD-5;
          font-size: ${({ theme }) => theme.fontSize_18};
          margin: 0;
        }
      }
      &>div:nth-child(2){
        padding: 30px 30px;
        &>p{
          font-family: SCD-4;
          font-size: ${({ theme }) => theme.fontSize_18};
        }
      }
    }
  }
`

const SellerInfo = () => {
  return (
    <InfoBox>
      <div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
      </div>
      <div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
        <div>
          <div><p>상호명</p></div>
          <div><p>상호네 농장</p></div>
        </div>
      </div>
    </InfoBox>
  )
}

export default SellerInfo