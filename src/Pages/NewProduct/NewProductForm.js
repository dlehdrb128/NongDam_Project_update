import styled from 'styled-components';
import {
  ContentBox,
  RadioBox,
  ImgBox,
  DetailBox,
  SelectBox,
  PeriodSet,
} from '../../common/Form';
import './Editor.css';
import { BasicButton } from '../../common/button';
import { useState, useRef } from 'react';
import axios from 'axios';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// ! import ReactHtmlParser from 'react-html-parser';
// ! 제품 상세페이지 불러오는 곳에 ReactHtmlParser()안에 데이터 받아야합니다.

// 폼제목과 폼을 메인박스로 묶었다
const MainBox = styled.div`
  width: 843px;
  padding: 100px 0 70px 0;
  display: flex;
  flex-direction: column;

  // form 제목
  & > form {
    & > h1 {
      font-family: 'SCD-6';
      color: ${({ theme }) => theme.lightblack};
      font-size: 2.5rem;
      padding-bottom: 15px;
      border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    }
    // form 으로 묶어서 아래에 한 줄씩 추가
    & > div:nth-child(2) {
      padding-bottom: 100px;
    }
    & > div:nth-child(4) {
      padding-bottom: 36px;
    }
    // 맨 아래 수정 등록 버튼을 묶은 박스
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

const NewProductForm = () => {
  const [sale, setSale] = useState(false);
  const [img, setImg] = useState('');
  const [imgPath, setImgPath] = useState('');
  const [region, setRegion] = useState('경기도');
  const [regionEng, setRegionEng] = useState('gyeongi');
  const [inputData, setInputData] = useState({
    productName: '',
    productPrice: '',
    startHour: '00',
    startMinute: '00',
    endHour: '23',
    endMinute: '55',
    ProductDiscountPercent: '',
    discount: '',
    startDate: '',
    endDate: '',
    productLocal: '경기도',
  });
  const [editorContent, setEditorContent] = useState('');

  const onchangeRegion = (e) => {
    setRegionEng(e.target.value);
    setRegion(e.target[e.target.selectedIndex].text);
    //console.log(e.target[e.target.selectedIndex].text);
  };

  const imgSrc = useRef();

  const onChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let save = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      setImg(e.target.files[0]);

      reader.onload = async (e) => {
        const formData = new FormData();
        formData.append('img', save);

        let URL = `http://localhost:8080/admin/newProductImage`;
        const request = await axios.post(URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImgPath(request.data.imgPath);
        imgSrc.current.src = reader.result;
      };
    }
  };
  //console.log(imgPath);

  const onchange = (e) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

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

  const {
    productName,
    startHour,
    startMinute,
    endHour,
    endMinute,
    ProductDiscountPercent,
    startDate,
    endDate,
    productPrice,
  } = inputData;

  const data = {
    productName: productName,
    productLocal: region,
    productLocalEng: regionEng,
    productPrice: productPrice,
    productDiscountSet: sale === true ? 1 : 0,
    ProductDiscountPercent: sale === true ? ProductDiscountPercent : null,
    productDiscountStart:
      sale === true ? `'${startDate} ${startHour}:${startMinute}:00'` : null,
    productDiscountEnd:
      sale === true ? `'${endDate} ${endHour}:${endMinute}:00'` : null,
    productImage: imgPath,
    productDetail: editorContent,
  };
  //console.log(data);

  const onclick = () => {
    axios.post('http://localhost:8080/admin/newProduct', data);
    alert('상품이 등록되었습니다!');
    // alert(CreateProduct.data.status);
    // console.log(CreateProduct.data);
    window.location.reload();
  };

  return (
    <MainBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>상품등록</h1>
        <div>
          <ContentBox>
            <h2>
              상품명<span> *</span>
            </h2>
            <div>
              <input type='text' onChange={onchange} name='productName'></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              판매가격<span> *</span>
            </h2>
            <div>
              <input
                onChange={onchange}
                // value={productPrice}
                name='productPrice'
              ></input>
              <span>원</span>
            </div>
          </ContentBox>
          <SelectBox>
            <h2>
              지역<span> *</span>
            </h2>
            <div>
              <select onChange={onchangeRegion}>
                <option value='gyoenggi'>경기도</option>
                <option value='gangwon'>강원도</option>
                <option value='chungbuk'>충청북도</option>
                <option value='chungnam'>충청남도</option>
                <option value='jeonbuk'>전라북도</option>
                <option value='jeonnam'>전라남도</option>
                <option value='gyeongbuk'>경상북도</option>
                <option value='gyeongnam'>경상남도</option>
              </select>
            </div>
          </SelectBox>
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
                ></input>
                <label htmlFor='input-file'>등록</label>
                <p>등록이미지 : 5M 이하 / gif, png, jpg(jpeg)</p>
              </div>
            </div>
          </ImgBox>
          <DetailBox>
            <h2>
              상세페이지
              <span> *</span>
            </h2>
            <div>
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  //console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  // console.log({ event, editor, data });
                  setEditorContent(data);
                  //console.log(data);
                }}
                onBlur={(event, editor) => {
                  //console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  //console.log('Focus.', editor);
                }}
              />
            </div>
          </DetailBox>
        </div>
        <h1>할인 적용</h1>
        <div>
          <RadioBox>
            <h2>
              할인 적용 여부
              <span> *</span>
            </h2>
            <div>
              <input
                type='radio'
                name='sale'
                onClick={() => {
                  setSale(true);
                }}
              />
              <label>할인적용</label>
              <input
                type='radio'
                name='sale'
                onClick={() => {
                  setSale(false);
                }}
              />
              <label>적용안함</label>
            </div>
          </RadioBox>
          {sale === true ? (
            <div>
              <ContentBox>
                <h2>
                  할인율 <span> *</span>
                </h2>
                <div>
                  <input
                    type=''
                    onChange={onchange}
                    name='ProductDiscountPercent'
                  ></input>
                  <span>%</span>
                </div>
              </ContentBox>
              <PeriodSet>
                <h2>
                  기간설정 <span> *</span>
                </h2>
                <div>
                  <div>
                    <div>
                      <input
                        type='date'
                        onChange={onchange}
                        name='startDate'
                      ></input>
                    </div>
                    <select onChange={onchange} name='startHour'>
                      {hourList.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <span>시</span>
                    <select onChange={onchange} name='startMinute'>
                      {minuteList.map((item) => {
                        return (
                          <option key={item} name='startMinute'>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                    <span>분 ~</span>
                  </div>
                  <div>
                    <div>
                      <input
                        type='date'
                        onChange={onchange}
                        name='endDate'
                      ></input>
                    </div>
                    <select onChange={onchange} name='endHour'>
                      {hourList.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <span>시</span>
                    <select onChange={onchange} name='endMinute'>
                      {minuteList.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <span>분</span>
                  </div>
                </div>
              </PeriodSet>
            </div>
          ) : null}
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
            onClick={onclick}
          >
            등록
          </BasicButton>
        </div>
      </form>
    </MainBox>
  );
};

export default NewProductForm;
