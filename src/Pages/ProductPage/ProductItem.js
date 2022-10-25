import { ProductItemBox, SaleBox } from "../../common/product";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const data = {
    product_key: 1,
    product_image: "product-1.png",
    product_local: "전남",
    product_name: "상품 테스트",
    product_discount_percent: 1,
    product_price: 25000,
    product_discount_percent: 5,
  };

  const datas = [{ reviewValue: 4.75689, reviewCount: 5 }];

  return (
    <ProductItemBox>
      <Link to={`/product/detail/${data.product_key}`}>
        <img
          src={`http://localhost:8080/product/${data.product_image}`}
          alt="이미지 없음"
        ></img>
        <div>[{data.product_local}]</div>
        <div>{data.product_name}</div>
        <div>
          {data.product_discount_percent === 0 ? (
            <div>
              {Math.round((data.product_price / 10) * 10).toLocaleString()}원
            </div>
          ) : (
            <SaleBox firstTextDecoration="line-through">
              <div>
                {Math.round((data.product_price / 10) * 10).toLocaleString()}
              </div>
              <div>
                {Math.round(
                  (data.product_price -
                    (data.product_price * data.product_discount_percent) /
                      100) /
                    10
                ) * (10).toLocaleString()}
                원
              </div>
            </SaleBox>
          )}

          <div>
            <div>
              <span>★</span>{" "}
              {datas[0].reviewValue === null
                ? 0
                : datas[0].reviewValue.toFixed(1)}{" "}
              / 5
            </div>
            <div>리뷰 {datas[0].reviewCount}</div>
          </div>
        </div>
      </Link>
    </ProductItemBox>
  );
};

export default ProductItem;
