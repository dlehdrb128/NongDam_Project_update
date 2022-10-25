import { Link } from "react-router-dom";
import { ProductBox, SaleBox } from "../../../common/product";
import Theme from "../../../Theme/theme";

const LatestProductItem = ({ data }) => {
  return (
    <ProductBox>
      <Link to={`/product/detail/${data.product_key}`}>
        <img
          src={`http://localhost:8080/product/${data.product_image}`}
          alt="이미지 없음"
        ></img>
        <div>
          <div>[{data.product_local}]</div>
          <div>{data.product_name}</div>
        </div>
        {data.product_discount_percent === 0 ? (
          <div>
            {Math.round(data.product_price / 10) * (10).toLocaleString()}원
          </div>
        ) : (
          <SaleBox
            boxDirection="row"
            boxGap="5px"
            firstFontSize="1.9rem"
            firstColor={Theme.lightblack}
            secondFontSize="1.5rem"
            secondColor={Theme.gray}
            secondTextDecoration="line-through"
          >
            <div>
              {Math.round(
                (data.product_price -
                  (data.product_price * data.product_discount_percent) / 100) /
                  10
              ) * (10).toLocaleString()}
              원
            </div>
            <div>{data.product_price.toLocaleString()}</div>
          </SaleBox>
        )}
      </Link>
    </ProductBox>
  );
};

export default LatestProductItem;
