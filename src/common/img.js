import styled from "styled-components";
export const BasicImg = styled.img`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
  border-radius: ${(props) => props.borderRadius || "20px"};
  background-size: cover;
  background-color: green;
`;
// 이미지
