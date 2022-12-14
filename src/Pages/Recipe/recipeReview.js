import styled from "styled-components";
import { useState, useEffect } from "react";
import { MainButton } from "../../common/button";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1265px;
  height: 1500px;
  & > div:nth-child(1) {
    width: inherit;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 50px;
    & > div:nth-child(1) {
      & > h2 {
        font-size: 3rem;
        font-family: YANGJIN;
        color: ${({ theme }) => theme.lightblack};
        margin-bottom: 50px;
      }
      & > p {
        width: 700px;
        font-size: 2rem;
        font-family: SCD-5;
        color: ${({ theme }) => theme.lightblack};
        word-break: keep-all;
      }
    }
    & > img:nth-child(2) {
      width: 500px;
      height: 500px;
      border-radius: 20px;
    }
  }
  & > div:nth-child(2) {
    width: 1265px;
    margin-bottom: 50px;
    & > a {
      font-size: 2rem;
      font-family: SCD-5;
      color: ${({ theme }) => theme.lightblack};
    }
  }
  & > div:nth-child(3) {
    width: 1265px;
    font-size: 1.5rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 50px;
  }
  & > div:nth-child(4) {
    width: 1265px;
    & > img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      margin-right: 20px;
    }
  }
`;

// 배낌--------------------------

// 새로운 리뷰를 작성하는 요소들을 담은 박스
const ReviewWriteBox = styled.div`
  width: 1280px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 100px;

  & > div:nth-child(2) {
    display: flex;
    gap: 100px;
    align-items: center;
  }
`;

// 별점 설정 박스
const ValueBox = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

// 리뷰 작성 Input 속성
let TextInput = styled.input`
  width: 985px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5rem;
  font-family: "SCD-3";
  padding-left: 10px;
`;

const RecipeReview = ({ recipe }) => {
  const { id } = useParams();
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          `http://localhost:8080/recipe/post/${id}`
        );

        setData(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (data === undefined) {
    return null;
  }
  let imageArray = [
    data.recipe_image_path,
    data.recipe_image_path_2,
    data.recipe_image_path_3,
    data.recipe_image_path_4,
    data.recipe_image_path_5,
  ];

  let imageComponent = imageArray.map((value, index) => {
    if (value === null || undefined) {
      return;
    } else {
      return (
        <img
          src={`http://localhost:8080/recipe/${value}`}
          alt="이미지 없음"
          key={index}
        ></img>
      );
    }
  });

  let value = [1, 2, 3, 4, 5];

  let starRating = value.map((el) => {
    return (
      <img
        src={
          hovered >= el || clicked >= el
            ? "http://localhost:8080/productDetail/star-fill.png"
            : "http://localhost:8080/productDetail/star-outline.png"
        }
        key={el}
        onMouseEnter={() => setHovered(el)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setClicked(el)}
        alt="이미지 없음"
      />
    );
  });

  return (
    <ReviewParent>
      <div>
        <div>
          <h2>{data.recipe_title}</h2>
          <p>{data.recipe_guide}</p>
        </div>
        <img
          src={`http://localhost:8080/recipe/${data.recipe_image_path}`}
          alt="이미지 없음"
        ></img>
      </div>
      <div>
        <a href="#">{data.recipe_ingredient}</a>
      </div>
      <div>{data.recipe_tip}</div>
      <div>{imageComponent}</div>
      <ReviewWriteBox>
        <ValueBox>{starRating}</ValueBox>
        <div>
          <TextInput placeholder="댓글을 입력해주세요"></TextInput>
          <MainButton
            width="125px"
            height="40px"
            fontSize="2rem"
            fontFamily="SCD-6"
          >
            작성
          </MainButton>
        </div>
      </ReviewWriteBox>
    </ReviewParent>
  );
};
export default RecipeReview;
