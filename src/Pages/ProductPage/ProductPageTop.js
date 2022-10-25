import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledButton, Theme } from "../../Theme/theme";
import axios from "axios";
import { SaleBox } from "../../common/product";
import {
  ProductPageTopBox,
  ProductPageTopLeft,
  ProductPageTopRight,
  ProductPageCountBox,
  ProductPageTotalPrice,
  ProductPageButtonBox,
} from "../../common/productPage.js";

const ProductPageTop = ({ ProductData }) => {
  const [count, setCount] = useState(0);
  const data = [ProductData[0], count];
  let salePrice = null;

  const up = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const down = () => {
    setCount((count) => count + 1);
  };

  ProductData = ProductData[0];

  if (ProductData.product_discount_set === 1) {
    salePrice =
      ProductData.product_price -
      (ProductData.product_price * ProductData.product_discount_percent) /
        (100).toLocaleString();
  }

  const sendCart = () => {
    axios.post("http://localhost:8080/product/cart/insert", data);
  };

  return (
    <ProductPageTopBox>
      <ProductPageTopLeft>
        <img
          src={`http://localhost:8080/product/${ProductData.product_image}`}
          alt="데이터를 찾을 수 없습니다"
        ></img>
      </ProductPageTopLeft>
      <ProductPageTopRight>
        <Link to={`/store/detail/${ProductData.store_key}`}>
          <div>{ProductData.store_name}</div>
        </Link>
        <div>[{ProductData.product_local}]</div>
        <div>{ProductData.product_name}</div>
        <hr></hr>
        {salePrice === null ? (
          <div>
            {(Math.round(ProductData.product_price / 10) * 10).toLocaleString()}
            원
          </div>
        ) : (
          <SaleBox
            firstTextDecoration="line-through"
            firstPosition="absolute"
            firstBottom="40px"
          >
            <div>
              {(
                Math.round(ProductData.product_price / 10) * 10
              ).toLocaleString()}
              원
            </div>
            <div>{Math.round(salePrice / 10) * 10}원</div>
          </SaleBox>
        )}
        <ProductPageCountBox>
          <div>수량</div>
          <div>
            <button onClick={up}>-</button>
            <div>{count}</div>
            <button onClick={down}>+</button>
          </div>
        </ProductPageCountBox>
        <ProductPageTotalPrice>
          <div>총 합계금액 (수량) :</div>

          <div>
            {salePrice === null ? (
              <div>
                {(
                  Math.round(ProductData.product_price / 10) *
                  10 *
                  count
                ).toLocaleString()}
                원
              </div>
            ) : (
              <div>
                {(Math.round(salePrice / 10) * 10 * count).toLocaleString()}원
              </div>
            )}
            <div>({count}개)</div>
          </div>
        </ProductPageTotalPrice>
        <ProductPageButtonBox>
          <StyledButton fs="3rem" wd="298px" ht="60px" fontFamily="SCD-6">
            구매하기
          </StyledButton>
          <StyledButton
            fs="3rem"
            wd="298px"
            ht="60px"
            bg="none"
            fontFamily="SCD-3"
            border="1.5px solid rgba(0, 0, 0, 1)"
            color={Theme.lightblack}
            onClick={sendCart}
          >
            장바구니
          </StyledButton>
        </ProductPageButtonBox>
      </ProductPageTopRight>
    </ProductPageTopBox>
  );
};

export default ProductPageTop;
