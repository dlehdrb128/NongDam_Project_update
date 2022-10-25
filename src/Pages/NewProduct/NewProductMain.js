import NewProductForm from './NewProductForm';
import AdminCategory from '../Admin/AdminCategory';
import styled from 'styled-components';

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;
const NewProductMain = () => {
  return (
    <MainBox>
      <AdminCategory></AdminCategory>
      <NewProductForm></NewProductForm>
    </MainBox>
  );
};

export default NewProductMain;
