import NewProductForm from "./NewProductForm";
import styled from "styled-components";
import SetSidemenu from "../../common/SetSidemenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  padding-top: 130px;
`;
const NewProductMain = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const request = async () => {
      try {
        await axios.get("http://localhost:8080/login/admincheck", {
          withCredentials: true,
        });
      } catch (error) {
        alert(error.response.data.statusMessage);
        navigate("/");
      }
    };
    request();
  }, []);
  return (
    <MainBox>
      <SetSidemenu Text={"상품 관리"}></SetSidemenu>;
      <NewProductForm></NewProductForm>
    </MainBox>
  );
};

export default NewProductMain;
