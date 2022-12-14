import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../../Theme/theme";

// 제품 후기 아이템을 담은 박스
const ReviewItemBox = styled.div`
  width: 1280px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  /* 후기 텍스트, 이미지를 담은 박스  */
  & > div:nth-child(2) {
    width: 95%;
    height: 95%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    /* 후기 텍스트 설정 */
    & > div:nth-child(1) {
      display: flex;
      justify-content: space-between;

      & > textarea {
        width: 1000px;
        height: 150px;
        border-radius: 10px;
        overflow: auto;
        font-family: "SCD-3";
        font-size: 1.8rem;
        padding-left: 10px;
        padding-top: 10px;
      }

      & > div {
        font-family: "SCD-3";
        font-size: 1.8rem;
        color: ${({ theme }) => theme.lightblack};
      }

      & > div:nth-child(2) {
        display: flex;
        gap: 10px;
      }
    }

    /* 후기 이미지 들을 담은 박스 */
    & > div:nth-child(2) {
      display: flex;
      gap: 30px;

      /* 후기 이미지 규격 설정 */
      & > img {
        width: 188px;
        height: 152px;
        border-radius: 10px;
      }
    }
  }
`;

// 후기 정보 (id, 별점, 작성 날짜)를 담은 박스
const InforMation = styled.div`
  width: 1280px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.lightblack};
  border-radius: 10px;

  /* 유저 id */
  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 2rem;
    margin-left: 20px;
  }

  /* 별점, 날짜를 담은 박스 */
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    gap: 10px;

    /* 별점 */
    & > div:nth-child(1) {
      font-family: "SCD-6";
      padding-top: 3px;
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    /* 날짜 */
    & > div:nth-child(2) {
      font-family: "SCD-6";
      font-size: 1.5rem;
    }
  }
`;

const ProductReview = ({ data, user }) => {
  const [edit, setEdit] = useState();
  const [input, setInput] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
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

  let imageArray = [];
  let reviewImage;
  for (let key in data) {
    if (
      data[key] !== "null" &&
      key[8] === "m" &&
      typeof data[key] !== "number"
    ) {
      imageArray.push(data[key]);
    }
  }

  if (data.review_image !== null) {
    reviewImage = imageArray.map((value, index) => {
      if (value === null) {
        return;
      }
      return (
        <img
          key={index}
          src={`http://localhost:8080/review/${value}`}
          alt="이미지 없음"
        ></img>
      );
    });
  }

  const reviewDelete = async () => {
    let choice = window.confirm("리뷰를 삭제하시겠습니까?");
    if (choice === true) {
      try {
        let response = await axios.post(
          "http://localhost:8080/product/review/delete",
          { review_key: data.review_key },
          { withCredentials: true }
        );
        if (response.data.status === 201) {
          alert("리뷰 삭제 완료");
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const reviewEdit = async () => {
    let choice = window.confirm("리뷰를 수정하시겠습니까?");
    if (choice === true) {
      if (input === null || clicked === null) {
        alert("리뷰를 입력하시거나 평점을 설정해주세요");
        return;
      }
      try {
        let response = await axios.post(
          "http://localhost:8080/product/review/edit",
          {
            review_key: data.review_key,
            review_text: input,
            review_value: clicked === null ? data.review_value : clicked,
          },
          { withCredentials: true }
        );
        if (response.data.status === 201) {
          alert("리뷰 수정 완료");
          setEdit(false);
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const newDate = data.review_post_date.split("T");

  return (
    <ReviewItemBox>
      <InforMation>
        <div>{data.review_user_id}</div>
        <div>
          <div>
            {edit === true ? null : (
              <img
                src="http://localhost:8080/productDetail/star-fill.png"
                alt="이미지 없음"
              ></img>
            )}
            {edit === true ? starRating : `${data.review_value} / 5 `}
          </div>
          <div>{newDate[0]}</div>
        </div>
      </InforMation>
      <div>
        <div>
          {edit === true ? (
            <textarea
              type={"text"}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></textarea>
          ) : (
            <div>{data.review_text}</div>
          )}
          {user === undefined ? null : user.user_key === data.user_key ? (
            <div>
              {edit === true ? (
                <StyledButton
                  wd="40px"
                  ht="30px"
                  fs="1.6rem"
                  fontFamily="SCD-4"
                  onClick={reviewEdit}
                >
                  완료
                </StyledButton>
              ) : (
                <StyledButton
                  wd="40px"
                  ht="30px"
                  fs="1.6rem"
                  fontFamily="SCD-4"
                  onClick={() => {
                    setEdit(true);
                    setClicked(data.review_value);
                  }}
                >
                  수정
                </StyledButton>
              )}
              {edit === true ? (
                <StyledButton
                  wd="40px"
                  ht="30px"
                  fs="1.6rem"
                  fontFamily="SCD-4"
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  취소
                </StyledButton>
              ) : (
                <StyledButton
                  wd="40px"
                  ht="30px"
                  fs="1.6rem"
                  fontFamily="SCD-4"
                  onClick={reviewDelete}
                >
                  삭제
                </StyledButton>
              )}
            </div>
          ) : null}
        </div>
        <div>{reviewImage}</div>
      </div>
    </ReviewItemBox>
  );
};

export default ProductReview;
