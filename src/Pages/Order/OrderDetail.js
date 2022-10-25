import React, { useEffect, useState } from "react";
import OrderPayment from "./OrderPaymentInfo";
import OrderPerson from "./OrderPerson";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { RsWrapper, Wrapper } from "./component";
import SetMypageList from "../../common/SetMypageList";
import SetSidemenu from "../../common/SetSidemenu";
import SetMypageTop from "../../common/SetMypageTop";

const OrderDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    const request = async () => {
      const orderDetail = await axios.get(
        `http://localhost:8080/order/detail/${productId}`,
        {
          withCredentials: true,
        }
      );
      console.log(orderDetail);

      if (orderDetail.data.status === 401) {
        alert(orderDetail.data.statusMessage);
        // navigate("/login");
      } else {
        console.log(orderDetail.data);
        setOrderDetail(orderDetail.data.orderDetail);
      }
    };

    request();
  }, []);

  return (
    <Wrapper>
      <RsWrapper>
        <Wrapper>
          {/* 메뉴 */}
          {/* <Mypagesec1 Text={`주문상세`} /> */}

          <SetSidemenu Text={`주문상세`} />

          <Wrapper dir={`column`} ju={`flex-start`}>
            <Wrapper dir={`column`}>
              {/* 나의 주문 정보 */}
              <SetMypageTop />
              <SetMypageList Text={`주문 정보`} />
            </Wrapper>

            {/* 받는 사람 정보 */}
            <OrderPerson orderDetail={orderDetail} />
            {/*  결제정보 */}
            <OrderPayment orderDetail={orderDetail} />
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </Wrapper>
  );
};

export default OrderDetail;
