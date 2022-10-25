import styled from 'styled-components';
import {
  InputBox,
  TitleBox,
  InputDivBox,
  ColumnBox,
  SelectBox,
  ImgBox,
  CheckboxDiv,
  RadioButton,
} from '../../common/component';
const MainBox = styled.div`
  width: 1062px;
  padding: 80px 0 30px 0;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.lightblack};

  & > form > h1 {
    font-family: 'SCD-6';
    font-size: 4rem;
    text-align: center;
    padding-bottom: 50px;
    border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    color: ${({ theme }) => theme.lightblack};
  }
  & > form > h2 {
    font-family: 'SCD-6';
    font-size: 2.5rem;
    color: ${({ theme }) => theme.lightblack};
    padding-top: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.lightblack};
  }
`;

const SignUp = () => {
  const firstTelList = [
    '02',
    '031',
    '032',
    '033',
    '041',
    '042',
    '043',
    '044',
    '051',
    '052',
    '054',
    '055',
    '061',
    '062',
    '063',
    '064',
    '070',
    '010',
  ];

  const firstMobileList = ['010', '011', '016', '017', '018', '019', '070'];
  return (
    <MainBox>
      <form>
        <h1>회원가입</h1>
        <ColumnBox>
          <TitleBox height='50px'>
            회원구분<span>*</span>
          </TitleBox>
          <InputDivBox width='921px' height='50px' juc='flex-start'>
            <RadioButton type='radio' name='user'>
              개인회원
            </RadioButton>
            <RadioButton type='radio' name='user'>
              사업자회원
            </RadioButton>
          </InputDivBox>
        </ColumnBox>
        <h2>기본정보</h2>
        <ColumnBox>
          <TitleBox>
            아이디<span>*</span>
          </TitleBox>
          <InputDivBox width='921px'>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            비밀번호<span>*</span>
          </TitleBox>
          <InputDivBox width='921px'>
            <InputBox type={'password'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            비밀번호 확인<span>*</span>
          </TitleBox>
          <InputDivBox width='921px'>
            <InputBox type={'password'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            이름<span>*</span>
          </TitleBox>
          <InputDivBox width='921px'>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox height='205px'>
            주소<span>*</span>
          </TitleBox>
          <InputDivBox dir='Column' width='921px' height='205px'>
            <InputBox type={'text'} width='170px'></InputBox>
            <InputBox type={'text'}></InputBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>일반전화</TitleBox>
          <InputDivBox juc='flex-start' ali='center'>
            <SelectBox>
              {firstTelList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </SelectBox>
            <span>-</span>
            <InputBox type={'text'} width='100px'></InputBox>
            <span>-</span>
            <InputBox type={'text'} width='100px'></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            휴대전화<span>*</span>
          </TitleBox>
          <InputDivBox juc='flex-start' ali='center'>
            <SelectBox>
              {firstMobileList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </SelectBox>
            <span>-</span>
            <InputBox type={'text'} width='100px'></InputBox>
            <span>-</span>
            <InputBox type={'text'} width='100px'></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            이메일<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'email'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <h2>추가정보</h2>
        <ColumnBox>
          <TitleBox>
            사업자 등록번호<span>*</span>
          </TitleBox>
          <InputDivBox width='921px'>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            추천인 아이디<span>*</span>
          </TitleBox>
          <InputDivBox width='921px'>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <h2>약관동의</h2>
        <div>
          <CheckboxDiv
            type='checkbox'
            height='80px'
            font='SCD-5'
            fontSize='1.8rem'
          >
            이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
            동의합니다.
          </CheckboxDiv>
          <CheckboxDiv type='checkbox'>[필수] 이용약관 동의</CheckboxDiv>
          <CheckboxDiv type='checkbox'>
            [필수] 개인정보 수집 및 이용 동의
          </CheckboxDiv>
          <div style={{ display: 'flex' }}>
            <CheckboxDiv type='checkbox' width='300px'>
              [선택] SMS 수신을 동의하십니까?
            </CheckboxDiv>
            <CheckboxDiv type='checkbox' width='1000px'>
              [선택] 이메일 수신을 동의하십니까?
            </CheckboxDiv>
          </div>
        </div>
      </form>
    </MainBox>
  );
};

export default SignUp;
