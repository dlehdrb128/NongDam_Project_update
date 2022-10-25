import styled from 'styled-components';

/**
 * @기본버튼입니다
 * @props
 * @bgColor_color_fontSize_fontFamily
 */

export const BasicButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: ${(props) => props.bgColor || `${props.theme.green}`};
  color: ${(props) => props.color || `${props.theme.realWhite}`};
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-family: ${(props) => props.fontFamily || 'SCD-5'};
  cursor: pointer;
`;

/**
 * @기본버튼입니다
 * @props
 * @bgColor_color_fontSize_fontFamily
 */

export const SmallButton = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  background-color: ${(props) => props.bgColor || `${props.theme.green}`};
  color: ${(props) => props.color || `${props.theme.realWhite}`};
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-family: ${(props) => props.fontFamily || 'SCD-3'};
  cursor: pointer;
`;
export const MainButton = styled.button`
  width: 250px;
  height: 80px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || `${props.theme.green}`};
  color: ${(props) => props.color || `${props.theme.realWhite}`};
  font-size: ${(props) => props.fontSize || '2rem'};
  font-family: ${(props) => props.fontFamily || 'YANGJIN'};
  box-shadow: ${(props) =>
    props.boxShadow || `5px 5px 10px ${props.theme.lightgray}`};
  cursor: pointer;
  transition: ${(props) => props.transition || '0.5s'};
  &:hover {
    background-color: ${({ theme }) => theme.orange};
  }
`;
