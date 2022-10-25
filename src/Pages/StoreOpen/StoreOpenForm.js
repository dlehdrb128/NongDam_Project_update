import styled from 'styled-components';
import {
  InputBox,
  TitleBox,
  InputDivBox,
  ColumnBox,
  SelectBox,
  ImgBox,
  RadioButton,
} from '../../common/component';

const MainBox = styled.div`
  width: 843px;
  padding: 180px 0 30px 0;
  display: flex;
  flex-direction: column;
  & > form > h1 {
    font-family: 'SCD-6';
    color: ${({ theme }) => theme.lightblack};
    font-size: 2.5rem;
    padding-top: 40px;
    padding-bottom: 15px;
    border-bottom: 2px solid ${({ theme }) => theme.lightblack};
  }
`;

const StoreOpenForm = () => {
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
        <h1>스토어정보</h1>
        <ColumnBox>
          <TitleBox>
            쇼핑몰명<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            대표 휴대전화<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            대표 이메일<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'email'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            이름<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox height='205px'>
            사업장주소<span>*</span>
          </TitleBox>
          <InputDivBox dir='Column' height='205px'>
            <InputBox type={'text'} width='170px'></InputBox>
            <InputBox type={'text'}></InputBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox height='230px'>
            대표이미지 등록<span>*</span>
          </TitleBox>
          <InputDivBox height='230px'>
            <ImgBox>
              <div></div>
              <p>권장 500px * 500px</p>
            </ImgBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox height='200px'>스토어 설명</TitleBox>
          <InputDivBox height='200px'>
            <InputBox height='160px'></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>대표전화</TitleBox>
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
            수신전용 이메일<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'email'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            발신전용 이메일<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'email'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            통신판매업 신고<span>*</span>
          </TitleBox>
          <InputDivBox juc='flex-start' ali={'center'}>
            <RadioButton type='radio' name='business'>
              신고함
            </RadioButton>
            <RadioButton type='radio' name='business'>
              신고안함
            </RadioButton>
          </InputDivBox>
        </ColumnBox>
        <h1>고객센터 정보안내 설정</h1>
        <ColumnBox>
          <TitleBox>
            상담전화<span>*</span>
          </TitleBox>
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
            상담 이메일<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'email'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>팩스번호</TitleBox>
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
            CS 운영시간<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox></ColumnBox>
      </form>
    </MainBox>
  );
};

export default StoreOpenForm;
