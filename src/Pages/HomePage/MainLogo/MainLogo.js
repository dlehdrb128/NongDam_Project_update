import styled from "styled-components";

const MainLogoBox = styled.div``;
const MainLogoItem = styled.img``;

// 메인 로고
const MainLogo = () => {
  return (
    <MainLogoBox>
      <MainLogoItem
        src="http://localhost:8080/main/main-banner.png"
        alt="이미지 없음"
      ></MainLogoItem>
    </MainLogoBox>
  );
};

export default MainLogo;
