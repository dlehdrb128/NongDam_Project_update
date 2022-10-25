
import styled from "styled-components";
import SetSidemenu from "../../common/SetSidemenu";
import SetMypageTop from "../../common/SetMypageTop";
import SetMypageList from "../../common/SetMypageList";
import ProductItem from "../ProductPage/ProductItem";
import SellerInfo from '../../common/SellerInfo';

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
        <SetSidemenu Text={"그냥만듬"}></SetSidemenu>
        <SetMypageList></SetMypageList>
        <SetSidemenu Text={'상호'}></SetSidemenu>
        <SetMypageList Text={'최근주문정보'}></SetMypageList>
        <SellerInfo></SellerInfo>
        <ProductItem></ProductItem>
      </div>
    </>
  );
};

export default HomePage;
