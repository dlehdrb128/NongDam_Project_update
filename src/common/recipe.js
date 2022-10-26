import styled from "styled-components";
// 힝
export const PostList = styled.div`
  /* 낱개 게시글 설정 */
  color: ${(props) => props.color || `${props.theme.lightblack}`};
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.width || "250px"};
  margin: 2px;
  &:hover {
    font-weight: bold;
  }
  & > h3 {
    width: 200px;
    font-size: 1.5rem;
    font-family: SCD-3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & > div:nth-child(3) {
    width: 200px;
    font-size: 1.5rem;
    font-family: SCD-4;
    display: flex;
    align-items: center;
  }
  & > p {
    width: 200px;
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
