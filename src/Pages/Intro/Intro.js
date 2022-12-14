import styled from "styled-components";
import IntroTopvisual from "./IntroTopvisual";
import Introsec1 from "./section/Introsec1";
import Introsec2 from "./section/Introsec2";
import Introsec3 from "./section/Introsec3";
import Introsec4 from "./section/Introsec4";
import Introsec5 from "./section/Introsec5";

// 메인 컨테이너
const Main = styled.main`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //섹션 컨테이너
  & > div.sec_wrap {
    width: 1280px;
    position: relative;
  }
`;

const Intro = () => {
  return (
    <>
      {/* Visual */}
      <Main>
        <IntroTopvisual />
        <div className="sec_wrap">
          <Introsec1 />
          {/* section1 */}
          <Introsec2 />
          {/* section2 */}
          <Introsec3 />
          {/* section3 */}
          <Introsec4 />
          {/* section4 */}
        </div>
        <Introsec5 />
        {/* seciton5 */}
      </Main>
    </>
  );
};
//end

export default Intro;
