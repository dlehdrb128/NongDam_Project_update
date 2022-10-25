import styled from "styled-components";
export const BasicImg = styled.img`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
  border-radius: ${(props) => props.borderRadius || "20px"};
  background-size: cover;
  background-color: ${(props) => props.bgColor || "none"};
  cursor: pointer;
`;

export const MainImg = styled.img`
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.height || "400px"};
  border-radius: ${(props) => props.borderRadius || "20px"};
  background-size: cover;
  background-color: ${(props) => props.bgColor || "none"};
  cursor: pointer;
`;

// 이미지
