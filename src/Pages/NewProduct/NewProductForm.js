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
import { BasicButton } from '../../common/button';

const MainBox = styled.div`
  width: 843px;
  padding: 70px 0 30px 0;
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
  & > form > div:nth-child(11) {
    width: 843px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
      margin: 70px 10px 0 10px;
    }
  }
`;

const NewProductForm = () => {
  const hourList = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  const minuteList = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ];
  return (
    <MainBox>
      <form>
        <h1>상품등록</h1>
        <ColumnBox>
          <TitleBox>
            상품명<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            상품가격<span>*</span>
          </TitleBox>
          <InputDivBox>
            <InputBox type={'text'}></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>
            지역<span>*</span>
          </TitleBox>
          <InputDivBox>
            <SelectBox>
              <option value='gyoenggi'>경기도</option>
              <option value='gangwon'>강원도</option>
              <option value='chungbuk'>충청북도</option>
              <option value='chungnam'>충청남도</option>
              <option value='jeonbuk'>전라북도</option>
              <option value='jeonnam'>전라남도</option>
              <option value='gyeongbuk'>경상북도</option>
              <option value='gyeongnam'>경상남도</option>
            </SelectBox>
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
        <ColumnBox dir='column'>
          <TitleBox width='843px'>상세페이지</TitleBox>
          <InputDivBox width='843px' height='700px' border='none'></InputDivBox>
        </ColumnBox>
        <h1>할인적용</h1>
        <ColumnBox>
          <TitleBox>
            할인적용<span>*</span>
          </TitleBox>
          <InputDivBox juc='flex-start' ali={'center'}>
            <RadioButton type='radio' name='discount'>
              할인적용
            </RadioButton>
            <RadioButton type='radio' name='discount'>
              적용안함
            </RadioButton>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox>할인율</TitleBox>
          <InputDivBox>
            <InputBox></InputBox>
          </InputDivBox>
        </ColumnBox>
        <ColumnBox>
          <TitleBox height='140px'>기간설정</TitleBox>

          <InputDivBox height='140px' dir='column'>
            <div>
              <InputBox type={'date'} width='187px'></InputBox>
              <SelectBox>
                {hourList.map((item) => (
                  <option key={item}>{item} 시</option>
                ))}
              </SelectBox>
              <SelectBox>
                {minuteList.map((item) => (
                  <option key={item}>{item} 분</option>
                ))}
              </SelectBox>
            </div>
            <div>
              <InputBox type={'date'} width='187px'></InputBox>

              <SelectBox>
                {hourList.map((item) => (
                  <option key={item}>{item} 시</option>
                ))}
              </SelectBox>
              <SelectBox>
                {minuteList.map((item) => (
                  <option key={item}>{item} 분</option>
                ))}
              </SelectBox>
            </div>
          </InputDivBox>
        </ColumnBox>
        <div>
          <BasicButton>수정</BasicButton>
          <BasicButton>등록</BasicButton>
        </div>
      </form>
    </MainBox>
  );
};

export default NewProductForm;
