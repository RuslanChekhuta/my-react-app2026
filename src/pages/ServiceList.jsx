import React from "react";

const ServiceList = () => {
  const services = [
    { id: "service-1", name: "Верстка", price: 300 },
    { id: "service-2", name: "Настройка React", price: 500 },
    { id: "service-3", name: "Тестирование", price: 200 },
  ];

  return (
    <ul>
      {services.map(({ id, name, price }) => {
        const discountedPrice = price * 0.8;
        return (
          <li key={id}>
            <h3>{name}</h3>
            <p>Цена со скидкой: {discountedPrice.toFixed(2)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ServiceList;
