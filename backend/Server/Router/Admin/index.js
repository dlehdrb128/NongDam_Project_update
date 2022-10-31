const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const multer = require('multer');
const path = require('path');

const upload = multer({
  // storage 어디에 저장할건지 , diskStorage 하드 디스크에 저장하겠다.

  storage: multer.diskStorage({
    // 어디 파일에 저장할것인지
    // cb는 함수이고 (에러, 파일이름) 에러가 없으나 null

    destination: function (req, file, cb) {
      console.log(req);
      cb(null, 'uploads/store');
    },

    // 파일 이름 무엇으로 할건지
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

router.get('/storeOpen', (req, res) => {
  connection.query(`select * from admin_store;`, (error, row, field) => {
    if (error) throw error;
    res.send(row);
  });
});

router.post('/storeOpen', (req, res) => {
  console.log(req.body);
  const {
    storeName,
    storeCeophone,
    storeCeoEmail,
    storeCeoName,
    storeAddress,
    storeCall,
    storePhone,
    storeReceiveEmail,
    storeOutgoingEmail,
    storeBusiness,
    storecsCall,
    storeCsEmail,
    storeFax,
    storeCsTime,
    storeDesc,
    storeimg,
  } = req.body;

  const SQL = `INSERT INTO admin_store (store_key, user_key,user_auth, store_name,store_ceo_phone,store_ceo_email,store_ceo_name,store_address,store_img,store_call,store_phone,store_reciveEmail,store_outgoingEmail,store_business,store_cs_call,store_cs_email,store_fax,store_cs_time,store_desc) VALUES (null, 12,'사업자','${storeName}','${storeCeophone}','${storeCeoEmail}','${storeCeoName}','${storeAddress}','${storeimg}','${storeCall}','${storePhone}','${storeReceiveEmail}','${storeOutgoingEmail}',${storeBusiness},'${storecsCall}','${storeCsEmail}','${storeFax}','${storeCsTime}','${storeDesc}'
  );`;

  connection.query(SQL, (err, row, fild) => {
    if (err) throw err;
    console.log(row);
  });
});

// 스토어 대표이미지 업로드
router.post('/storeImage', upload.single('img'), (req, res) => {
  console.log(req.file, 'aaaaaa');
  console.log(req.body);
  console.log(req.file.filename);
  res.json({ imagePath: req.file.filename });
});

const upload_product = multer({
  // storage 어디에 저장할건지 , diskStorage 하드 디스크에 저장하겠다.

  storage: multer.diskStorage({
    // 어디 파일에 저장할것인지
    // cb는 함수이고 (에러, 파일이름) 에러가 없으나 null

    destination: function (req, file, cb) {
      cb(null, 'uploads/product');
    },

    // 파일 이름 무엇으로 할건지
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

router.get('/newProduct', (req, res) => {
  console.log('상품등록');
  res.send('상품등록페이지');
});

router.post('/newProduct', (req, res) => {
  console.log('연동완료');
  const {
    productName,
    productLocal,
    productLocalEng,
    productPrice,
    productDiscountSet,
    ProductDiscountPercent,
    productDiscountStart,
    productDiscountEnd,
    productImage,
  } = req.body;

  // product_key 기준으로 desc 내림차순 으로
  // product테이블에 product_key 컬럼을 product_key기준으로 내림차순으로 1개
  connection.query(
    'select product_key from product order by product_key desc limit 1',
    (err, row1, field) => {
      if (err) throw err;
      console.log(row1);
      const newproductSQL = `INSERT INTO product (product_key,user_key,user_auth, product_name, product_local,product_local_eng,product_price,
      product_image,
      product_discount_set,product_discount_percent) VALUES (null,12,'사업자','${productName}','${productLocal}','${productLocalEng}',${productPrice},'${productImage}',${productDiscountSet},${ProductDiscountPercent});
      INSERT INTO admin_discount_date VALUES(null,${
        row1[0].product_key + 1
      },12,'사업자',${productDiscountStart},${productDiscountEnd});`;

      connection.query(newproductSQL, (err, row2, fild) => {
        if (err) throw err;
        console.log(row2);
      });
    }
  );

  // res.json({ status: '상품 등록 완료' });
});

// 상품등록 이미지 업로드
router.post('/newProductImage', upload_product.single('img'), (req, res) => {
  res.json({ imgPath: req.file.filename });
});

module.exports = router;
