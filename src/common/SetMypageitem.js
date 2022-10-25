/**
 * 주문 정보 아이템 컴포넌트입니다. 부모 컴포넌트에서 import 하여 map메서드롤 이용하여 사용하시면 됩니다.
 *  Data를 받아 사용하시면 됩니다.
 *  현재는 부모 컴포넌트로 부터 받은 데이터를 받아 작업되어있습니다.
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SetItems = styled.div`
  width: inherit;
  height: 144px;
  display: flex;
  align-items: center;
  padding: 0 34px;
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  &:hover {
    font-weight: bold;
  }
  //날짜,주문정보 컨테이너(위치조정)
  & > div {
    width: 111px;
    margin-right: 39px;
  }
  //날짜,주문정보 (사이즈,위치조정)
  & > p:nth-child(3) {
    width: 130px;
    margin-right: 44px;
  }
  //상품개수(사이즈,위치조정)
  & > p:nth-child(4) {
    width: 56px;
    margin-right: 15px;
  }
  //가격(사이즈,위치조정)
  & > p:nth-child(5) {
    width: 52px;
    margin-right: 60px;
  }
  //상품이미지
  img {
    width: 64px;
    height: 60px;
    margin-right: 30px;
  }
  //텍스트 공통(폰트,컬러조정)
  p {
    font-size: ${({ theme }) => theme.fontSize_13};
    font-family: SCD-3;
    color: ${({ theme }) => theme.lightblack};
    word-break: keep-all;
  }
`;

// let LinkUrl = `orderDetail/${data.user_key}`;

const SetMypageitem = ({ data }) => {
  return (
    <Link to=''>
      <SetItems>
        <div>
          <p>{data.date}</p>
          <br />
          <p>{data.odernum}</p>
        </div>
        {/* 상품이미지 */}
        <img src={data.orderimg} alt='Product'></img>
        {/* 상품명 */}
        <p>{data.orderitem}</p>
        {/* 상품구매갯수 */}
        <p>1개</p>
        {/* 가격 */}
        <p>{data.orderprice.toLocaleString()}원</p>
        {/* 배송현황 */}
        <p>{data.orderstatus}</p>
      </SetItems>
    </Link>
  );
};

export default SetMypageitem;
