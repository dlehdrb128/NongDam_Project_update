import styled from 'styled-components';
import {
  ContentBox,
  StoreDescBox,
  TelBox,
  RadioBox,
  BusinessAdd,
  ImgBox,
} from '../../common/Form';
import { BasicButton } from '../../common/button';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// 메인박스로 묶음
const MainBox = styled.div`
  width: 843px;
  padding: 60px 0 70px 0;
  display: flex;
  flex-direction: column;
  // 각 form의 제목을 h1으로 스타일링 해주었다
  & > form {
    // 스토어정보, 고객센터 정보안내 h1 스타일링
    & > h1 {
      font-family: 'SCD-6';
      color: ${({ theme }) => theme.lightblack};
      font-size: 2.5rem;
      padding-bottom: 15px;
      border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    }
    //스토어 정보 박스
    & > div:nth-child(2) {
      padding-bottom: 100px;
    }
    // 고객센터 정보안내 설정 박스
    & > div:nth-child(4) {
      padding-bottom: 36px;
    }
    // 해당페이지에 제일 아래 수정,등록버튼을 묶은 div
    & > div:nth-child(5) {
      padding-top: 35px;
      display: flex;
      justify-content: center;
      & > button {
        margin: 0 10px 0 10px;
      }
    }
  }
`;

const StoreOpenForm = () => {
  const imgSrc = useRef();
  const navigate = useNavigate();
  const [radioCheck, setradioCheck] = useState();
  const [img, setImg] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [inputData, setInputData] = useState({
    storeName: '',
    mobilePhone: '',
    email: '',
    name: '',
    address1: '',
    address2: '',
    address3: '',
    huntingLine1: '02',
    huntingLine2: '',
    huntingLine3: '',
    mobile1: '010',
    mobile2: '',
    mobile3: '',
    receiveEmail: '',
    outgoingEmail: '',
    csTel1: '02',
    csTel2: '',
    csTel3: '',
    csEmail: '',
    faxTel1: '02',
    faxTel2: '',
    faxTel3: '',
    csHours: '',
    storeDesc: '',
  });

  const onChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let save = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      setImg(e.target.files[0]);

      reader.onload = async (e) => {
        const formData = new FormData();
        formData.append('img', save);

        let URL = `http://localhost:8080/admin/storeImage`;
        const request = await axios.post(URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setImagePath(request.data.imagePath);
        imgSrc.current.src = reader.result;
      };
    }
  };

  //console.log(imagePath);

  const onChangeRadio = (e) => {
    setradioCheck(e.target.value);
  };

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

  const {
    storeName,
    mobilePhone,
    email,
    name,
    address1,
    address2,
    address3,
    huntingLine1,
    huntingLine2,
    huntingLine3,
    mobile1,
    mobile2,
    mobile3,
    receiveEmail,
    outgoingEmail,
    csTel1,
    csTel2,
    csTel3,
    csEmail,
    faxTel1,
    faxTel2,
    faxTel3,
    csHours,
    storeDesc,
  } = inputData;

  const onchange = (e) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const data = {
    storeName: storeName,
    storeCeophone: mobilePhone,
    storeCeoEmail: email,
    storeCeoName: name,
    storeAddress: `${address1} ${address2} ${address3}`,
    storeimg: imagePath,
    storeCall: `${huntingLine1}-${huntingLine2}-${huntingLine3}`,
    storePhone: `${mobile1}-${mobile2}-${mobile3}`,
    storeReceiveEmail: receiveEmail,
    storeOutgoingEmail: outgoingEmail,
    storecsCall: `${csTel1}-${csTel2}-${csTel3}`,
    storeCsEmail: csEmail,
    storeFax: `${faxTel1}-${faxTel2}-${faxTel3}`,
    storeCsTime: csHours,
    storeBusiness: radioCheck === 'true' ? 1 : 0,
    storeDesc: storeDesc,
  };

  const onClick = (e) => {
    axios.post('http://localhost:8080/admin/storeOpen', data);
    alert('스토어 개설을 하였습니다!');
    navigate('/admin');
  };

  return (
    <MainBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>스토어 개설</h1>
        <div>
          <ContentBox>
            <h2>
              스토어명
              <span> *</span>
            </h2>
            <div>
              <input type='text' onChange={onchange} name='storeName'></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              대표 휴대전화<span> *</span>
            </h2>
            <div>
              <input type='tel' onChange={onchange} name='mobilePhone'></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              대표 이메일<span> *</span>
            </h2>
            <div>
              <input type='email' onChange={onchange} name='email'></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              이름<span> *</span>
            </h2>
            <div>
              <input type='text' onChange={onchange} name='name'></input>
            </div>
          </ContentBox>
          <BusinessAdd>
            <h2>
              사업장 주소<span> *</span>
            </h2>
            <div>
              <div>
                <input
                  onChange={onchange}
                  name='address1'
                  placeholder='우편번호'
                ></input>
                <button>주소검색</button>
              </div>
              <input
                onChange={onchange}
                name='address2'
                placeholder='기본주소'
              ></input>
              <input
                onChange={onchange}
                name='address3'
                placeholder='나머지 주소(선택 입력 가능)'
              ></input>
            </div>
          </BusinessAdd>
          <ImgBox>
            <h2>
              대표이미지 등록<span> *</span>
            </h2>
            <div>
              <div>
                <div>
                  {img ? (
                    <img
                      src=''
                      alt=''
                      ref={imgSrc}
                      style={{ borderRadius: '3px' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '155px',
                        height: '155px',
                        backgroundColor: 'gray',
                        borderRadius: '3px',
                      }}
                    ></div>
                  )}
                </div>
                <p>권장 500px * 500px</p>
              </div>
              <div>
                <input
                  type='file'
                  id='input-file'
                  accept='image/jpeg,gif,png,jpg'
                  style={{ display: 'none' }}
                  onChange={onChangeFile}
                  name={'img'}
                ></input>
                <label htmlFor='input-file'>등록</label>
                <p>등록이미지 : 5M 이하 / gif, png, jpg(jpeg)</p>
              </div>
            </div>
          </ImgBox>
          <StoreDescBox>
            <h2>스토어 설명</h2>
            <div>
              <input
                type='text'
                onChange={onchange}
                name='storeDesc'
                placeholder='200자 이내로 작성해주세요'
                maxLength='200'
              ></input>
            </div>
          </StoreDescBox>
          <TelBox>
            <h2>대표전화</h2>
            <div>
              <select
                onChange={onchange}
                value={huntingLine1}
                name='huntingLine1'
              >
                {firstTelList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name='huntingLine2'></input>
              <span>-</span>
              <input onChange={onchange} name='huntingLine3'></input>
            </div>
          </TelBox>
          <TelBox>
            <h2>
              휴대전화
              <span> *</span>
            </h2>
            <div>
              <select onChange={onchange} value={mobile1} name='mobile1'>
                {firstMobileList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name='mobile2'></input>
              <span>-</span>
              <input onChange={onchange} name='mobile3'></input>
            </div>
          </TelBox>
          <ContentBox>
            <h2>
              수신전용 이메일<span> *</span>
            </h2>
            <div>
              <input
                type='email'
                onChange={onchange}
                name='receiveEmail'
              ></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              발신전용 이메일<span> *</span>
            </h2>
            <div>
              <input
                type='email'
                onChange={onchange}
                name='outgoingEmail'
              ></input>
            </div>
          </ContentBox>
          <RadioBox>
            <h2>
              통신판매업 신고
              <span> *</span>
            </h2>
            <div>
              <input
                type='radio'
                name='radioCheck'
                value='true'
                checked={radioCheck === 'true'}
                onChange={onChangeRadio}
              ></input>
              <label>신고함</label>
              <input
                type='radio'
                name='radioCheck'
                value='false'
                checked={radioCheck === 'false'}
                onChange={onChangeRadio}
              ></input>
              <label>신고안함</label>
            </div>
          </RadioBox>
        </div>
        <h1>고객센터 정보안내 설정</h1>
        <div>
          <TelBox>
            <h2>
              상담전화
              <span> *</span>
            </h2>
            <div>
              <select onChange={onchange} value={csTel1} name='csTel1'>
                {firstTelList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name='csTel2'></input>
              <span>-</span>
              <input onChange={onchange} name='csTel3'></input>
            </div>
          </TelBox>
          <ContentBox>
            <h2>
              상담 이메일<span> *</span>
            </h2>
            <div>
              <input type='email' onChange={onchange} name='csEmail'></input>
            </div>
          </ContentBox>
          <TelBox>
            <h2>팩스 전화</h2>
            <div>
              <select onChange={onchange} value={faxTel1} name='faxTel1'>
                {firstTelList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name='faxTel2'></input>
              <span>-</span>
              <input onChange={onchange} name='faxTel3'></input>
            </div>
          </TelBox>
          <ContentBox>
            <h2>
              CS 운영시간<span> *</span>
            </h2>
            <div>
              <input type='text' onChange={onchange} name='csHours'></input>
            </div>
          </ContentBox>
        </div>
        <div>
          <BasicButton
            bgColor={({ theme }) => theme.realWhite}
            color={({ theme }) => theme.lightblack}
            border='1px solid'
            fontFamily='SCD-6'
            fontSize='1.8rem'
            borderRadius='3px'
          >
            수정
          </BasicButton>
          <BasicButton
            fontFamily='SCD-6'
            fontSize='1.8rem'
            borderRadius='3px'
            onClick={onClick}
          >
            등록
          </BasicButton>
        </div>
      </form>
    </MainBox>
  );
};

export default StoreOpenForm;
