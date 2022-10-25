import StoreOpenForm from "./StoreOpenForm";
import SetSidemenu from "../../common/SetSidemenu";
import styled from "styled-components";

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  padding-top: 130px;
`;

const StoreOpenMain = () => {
  return (
    <MainBox>
      <SetSidemenu Text={"스토어 관리"}></SetSidemenu>;
      <StoreOpenForm></StoreOpenForm>;
    </MainBox>
  );
};

export default StoreOpenMain;
