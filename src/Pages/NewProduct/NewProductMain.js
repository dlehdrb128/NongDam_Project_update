import NewProductForm from './NewProductForm';
import styled from 'styled-components';
import SetSidemenu from '../../common/SetSidemenu';

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  padding-top: 130px;
`;
const NewProductMain = () => {
  return (
    <MainBox>
      <SetSidemenu Text={'상품관리'}></SetSidemenu>;
      <NewProductForm></NewProductForm>
    </MainBox>
  );
};

export default NewProductMain;
