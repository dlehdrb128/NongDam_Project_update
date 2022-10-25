import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputStyled,
  BigInputStyled,
  LongInput,
  ShortsInput,
} from "../../common/component";
import { BasicButton, SmallButton } from "../../common/button";
import Theme from "../../Theme/theme";

const SignUpParent = styled.form`
  /* 회원가입창 부모 설정 */
  width: 1230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;

  & > h1 {
    font-size: 4rem;
    font-family: "YANGJIN";
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 50px;
  }
  & > h2 {
    width: inherit;
    text-align: left;
    font-size: 2.5rem;
    font-family: "SCD-6";
    color: ${({ theme }) => theme.lightblack};
  }
  & > button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 3px;
    color: ${({ theme }) => theme.realWhite};
    background-color: ${({ theme }) => theme.green};
    font-size: 1.5rem;
    font-family: SCD-3;
    cursor: pointer;
  }
`;

const Terms = styled.div`
  /* 약관동의 */
  width: inherit;
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.lightblack};
  & > div {
    height: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.lightblack};
    display: flex;
    align-items: center;
    padding-left: 10px;
    & > p {
      font-size: 1.5rem;
      font-family: SCD-3;
      color: ${({ theme }) => theme.lightblack};
    }
  }
  & > div:nth-child(1) {
    height: 80px;
    & > p {
      font-size: 2rem;
      font-family: SCD-5;
      color: ${({ theme }) => theme.lightblack};
    }
  }
`;
const InputClick = styled.input`
  /* 선택 버튼 */
  accent-color: green;
`;

const SignUp = () => {
  const [userAuth, setUserAuth] = useState("");
  const [display, setDisplay] = useState("none");
  const [display2, setDisplay2] = useState("flex");
  const navigate = useNavigate();
  const [check, setCheck] = useState({
    allCheck: false,
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const [inputData, setInputData] = useState({
    userId: "",
    userEmail: "",
    userPassword: "",
    userPasswordcheck: "",
    userName: "",
    userZipcode: "",
    userAddress: "",
    userAddressDetail: "",
    userCall: "",
    userPhone: "",
    userReferralId: "",
    userAdminCompanyNum: "",
  });

  const {
    userId,
    userEmail,
    userPassword,
    userName,
    userZipcode,
    userAddress,
    userAddressDetail,
    userCall,
    userPhone,
    userPasswordcheck,
    userReferralId,
    userAdminCompanyNum,
  } = inputData;

  const onchange = (e) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const dbData = {
    userId: userId,
    userAuth: userAuth,
    userEmail: userEmail,
    userPassword: userPassword,
    userName: userName,
    userZipcode: userZipcode,
    userAddress: userAddress,
    userAddressDetail: userAddressDetail,
    userCall: userCall,
    userPhone: userPhone,
    userSMS: check.check3 === true ? 1 : 0,
    userEmailReceive: check.check4 === true ? 1 : 0,
    userReferralId: userReferralId,
    userAdminCompanyNum: userAdminCompanyNum,
  };

  const onsubmit = (e) => {
    e.preventDefault();

    console.log(userPassword);
    console.log(userPasswordcheck);
    const idcheck = /^([a-z0-9_]){6,50}$/;
    if (!idcheck.test(userId)) {
      alert("아이디는 영소문자, 숫자, 언더바 6~50자리를 사용해야 합니다.");
      return false;
    }

    const passwordcheck = /^[a-zA-z0-9]{4,12}$/;
    if (!passwordcheck.test(userPassword)) {
      alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다");
      return false;
    }
    if (userPassword !== userPasswordcheck) {
      alert("비밀번호와 비밀번호 확인 값이 같지 않습니다!");
      return false;
    }
    axios.post("http://localhost:8080/signUp", dbData);
    alert("회원가입에 성공하였습니다!");
    navigate("/login");
  };

  const checkChange = (e) => {
    let name = e.target.name;

    if (name === "allCheck" && e.target.checked === true) {
      setCheck({
        allCheck: true,
        check1: true,
        check2: true,
        check3: true,
        check4: true,
      });
    } else if (name === "allCheck" && e.target.checked === false) {
      setCheck({
        allCheck: false,
        check1: false,
        check2: false,
        check3: false,
        check4: false,
      });
    } else {
      setCheck({ ...check, [name]: e.target.checked });
    }
  };

  let test =
    check.check1 === false ||
    check.check2 === false ||
    check.check3 === false ||
    check.check4 === false
      ? false
      : true;

  console.log(dbData);

  return (
    <SignUpParent>
      {/* 회원가입창 부모 설정 */}
      <h1>회원가입</h1>
      <br />
      <InputStyled>
        {/* 회원구분  */}
        <div>
          {/* 왼쪽 회원구분 */}
          회원구분<span> *</span>
        </div>
        <div>
          <InputClick
            type="radio"
            name="member"
            value="일반"
            onChange={() => {
              setUserAuth("일반");
              setDisplay2("flex");
              setDisplay("none");
            }}
          ></InputClick>
          {/* 선택 버튼 */}
          &nbsp;개인회원 &nbsp;&nbsp;
          <InputClick
            type="radio"
            name="member"
            value="사업자"
            onChange={() => {
              setUserAuth("사업자");
              setDisplay("flex");
              setDisplay2("none");
            }}
          ></InputClick>
          &nbsp;사업자회원
        </div>
      </InputStyled>
      <br />
      <h2>기본정보</h2>
      <br />
      <InputStyled>
        {/* 기본정보 */}
        <div>
          {/* 왼쪽 목록 작은 사이즈 */}
          아이디<span> *</span>
        </div>
        <div>
          <LongInput
            type="text"
            name="userId"
            onChange={onchange}
            pattern="^([a-z0-9_]){6,50}$"
            required
          ></LongInput>
          {/* 작성란 */}
          &nbsp;&nbsp;&nbsp;
          <p
            style={{
              color: `${Theme.lightblack}`,
            }}
          >
            ( 영문소문자, 숫자, 언더바(_) 6~50자 )
          </p>
        </div>
      </InputStyled>
      <InputStyled>
        <div>
          비밀번호<span> *</span>
        </div>
        <div>
          <LongInput
            type="password"
            name="userPassword"
            onChange={onchange}
            required
          ></LongInput>
          &nbsp;&nbsp;&nbsp;
          <p>( 비밀번호는 영문 대소문자와 숫자 4~12자 )</p>
        </div>
      </InputStyled>
      <InputStyled>
        <div>
          비밀번호 확인<span> *</span>
        </div>
        <div>
          <LongInput
            type="password"
            name="userPasswordcheck"
            onChange={onchange}
            required
          ></LongInput>
        </div>
      </InputStyled>
      <InputStyled>
        <div>
          이름<span> *</span>
        </div>
        <div>
          <LongInput
            type="text"
            name="userName"
            onChange={onchange}
            required
          ></LongInput>
        </div>
      </InputStyled>
      <BigInputStyled>
        <div>
          주소<span> *</span>
        </div>
        {/* 왼쪽 목록 큰 사이즈 */}
        <div>
          <div>
            <ShortsInput
              type="text"
              placeholder="우편번호"
              name="userZipcode"
              onChange={onchange}
              required
            ></ShortsInput>
            &nbsp;&nbsp;&nbsp;
            <SmallButton>주소검색</SmallButton>
          </div>
          <LongInput
            placeholder="기본주소"
            name="userAddress"
            onChange={onchange}
            required
          ></LongInput>
          <LongInput
            placeholder="나머지 주소(선택 입력 가능)"
            name="userAddressDetail"
            onChange={onchange}
            required
          ></LongInput>
        </div>
      </BigInputStyled>
      <InputStyled>
        <div>일반전화</div>
        <div>
          <LongInput
            type={"text"}
            placeholder="전화번호 입력('-'제외)"
            maxLength={11}
            name="userCall"
            onChange={onchange}
          />
        </div>
      </InputStyled>
      <InputStyled>
        <div>
          휴대전화<span>*</span>
        </div>
        <div>
          <LongInput
            placeholder="핸드폰번호 입력('-'제외)"
            maxLength={11}
            name="userPhone"
            onChange={onchange}
            required
          />
          {/* 폰번호 작성란 */}
          &nbsp;&nbsp;&nbsp;
          <SmallButton>인증번호받기</SmallButton>
        </div>
      </InputStyled>
      <InputStyled>
        <div>
          이메일<span> *</span>
        </div>
        <div>
          <LongInput
            type="email"
            name="userEmail"
            onChange={onchange}
            required
          ></LongInput>
        </div>
      </InputStyled>
      <br />
      <h2>추가정보</h2>
      <br />
      <InputStyled style={{ display: `${display}` }}>
        {/* 추가정보 */}
        <div>사업자번호</div>
        <div>
          <LongInput name="userAdminCompanyNum" onChange={onchange}></LongInput>
        </div>
      </InputStyled>
      <InputStyled style={{ display: `${display2}` }}>
        <div>추천인 아이디</div>
        <div>
          <LongInput name="userReferralId"></LongInput>
        </div>
      </InputStyled>
      <br />
      <h2>약관동의</h2>
      <br />
      <Terms>
        {/* 약관동의 */}
        <div>
          <InputClick
            type="checkbox"
            onChange={checkChange}
            checked={test}
            name="allCheck"
          ></InputClick>
          &nbsp;&nbsp;
          <p>
            이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
            동의합니다.
          </p>
        </div>
        <div>
          <InputClick
            type="checkbox"
            required
            onChange={checkChange}
            checked={check.check1}
            readOnly
            name="check1"
          ></InputClick>
          &nbsp;&nbsp;
          <p>[필수] 이용약관 동의</p>
        </div>
        <div>
          <InputClick
            type="checkbox"
            required
            onChange={checkChange}
            checked={check.check2}
            readOnly
            name="check2"
          ></InputClick>
          &nbsp;&nbsp;
          <p>[필수] 개인정보 수집 및 이용 동의</p>
        </div>
        <div>
          <InputClick
            type="checkbox"
            onChange={checkChange}
            checked={check.check3}
            readOnly
            name="check3"
          ></InputClick>
          &nbsp;&nbsp;
          <p>[선택] SMS 수신을 동의하십니까?</p>
          &nbsp;&nbsp;&nbsp;
          <InputClick
            type="checkbox"
            onChange={checkChange}
            checked={check.check4}
            readOnly
            name="check4"
          ></InputClick>
          &nbsp;&nbsp;
          <p>[선택] 이메일 수신을 동의하십니까?</p>
        </div>
      </Terms>
      <br />
      <br />
      <BasicButton onClick={onsubmit}>회원가입</BasicButton>
    </SignUpParent>
  );
};
export default SignUp;
