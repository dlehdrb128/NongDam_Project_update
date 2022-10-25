import styled from 'styled-components';

// 스토어관리 메인페이지 네모박스

const Box = styled.div`
  width: 296px;
  height: 224px;
  border: 1px solid ${({ theme }) => theme.realWhite};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(149, 149, 149, 0.65);

  & > img {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  & > h1 {
    font-size: 1.8rem;
    font-family: 'SCD-6';
    color: ${({ theme }) => theme.green};
  }
  & > span {
    font-size: 1.8rem;
    font-family: 'SCD-3';
    color: ${({ theme }) => theme.lightblack};
  }
`;

const AdminBox = ({ src, name, content }) => {
  return (
    <Box>
      <img src={src} alt='icon'></img>
      <h1>{name}</h1>
      <span>{content}</span>
    </Box>
  );
};

export default AdminBox;
