import styled from "styled-components";
import AdminBox from "./AdminBox";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 전체 감싼 메인 박스 ( 전체화면 )
const MainBox = styled.div`
  width: inherit;
  padding-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // 스토어관리 메인 제목
  & > h1 {
    width: 900px;
    padding-bottom: 40px;
    text-align: center;
    font-family: "SCD-6";
    font-size: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    color: ${({ theme }) => theme.lightblack};
  }

  // 스토어관리 박스들 한번에 묶은 div
  & > div {
    width: 950px;
    height: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    padding-top: 70px;
    & > a {
      &:hover {
        font-weight: bold;
        cursor: pointer;
        color: ${({ theme }) => theme.orange};
        & > div {
          & > span {
            color: ${({ theme }) => theme.orange};
          }
        }
      }
    }
    & > div {
      &:hover {
        font-weight: bold;
        cursor: pointer;
        & > span {
          color: ${({ theme }) => theme.orange};
        }
      }
    }
  }
`;

const AdminMain = () => {
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

  const componentData = [
    {
      link: "create",
      src: "http://localhost:8080/icon/Admin_icon1.png",
      name: "스토어개설",
      content: "기본 스토어 개설",
    },
    {
      link: "store",
      src: "http://localhost:8080/icon/Admin_icon2.png",
      name: "스토어관리",
      content: "기본 스토어 관리",
    },
    {
      link: "newproduct",
      src: "http://localhost:8080/icon/Admin_icon3.png",
      name: "상품관리",
      content: "상품 등록, 수정",
    },
    {
      link: "board",
      src: "http://localhost:8080/icon/Admin_icon4.png",
      name: "게시판관리",
      content: "공지사항, 후기 관련",
    },
    {
      link: "money",
      src: "http://localhost:8080/icon/Admin_icon5.png",
      name: "정산",
      content: "판매현황, 금액 관리",
    },
    {
      link: "mypage",
      src: "http://localhost:8080/icon/Admin_icon6.png",
      name: "마이페이지",
      content: "나의 회원정보 수정",
    },
  ];

  return (
    <MainBox>
      <h1>스토어관리</h1>
      <div>
        {componentData.map((value, index) => {
          return (
            <Link to={`${value.link}`}>
              <AdminBox
                src={`${value.src}`}
                name={`${value.name}`}
                content={`${value.content}`}
              ></AdminBox>
            </Link>
          );
        })}
      </div>
    </MainBox>
  );
};

export default AdminMain;
