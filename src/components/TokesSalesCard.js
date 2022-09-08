import React from "react";

import tokenSales from "../assets/img/token-sales.png";

const TokesSalesCard = ({ title, description }) => {
  return (
    <div className="token-sales-card pb-3">
      <div className="token-sales-card__top ">
        <img src={tokenSales} />
      </div>
      <div className="px-md-2 p-1">
        <p className="token-sales-card__title mb-1 mt-3 ">{title}</p>
        <p className="token-sales-card__description">{description}</p>
      </div>
    </div>
  );
};

export default TokesSalesCard;
