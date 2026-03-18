import React from "react";

const OrderStatus = ({ isPaid }) => {
  return <div>{isPaid ? <p>Заказ оплачен</p> : <p>Заказ не оплачен</p>}</div>;
};

export default OrderStatus;
