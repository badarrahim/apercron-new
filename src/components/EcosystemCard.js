import React from "react";

import tokenSales from "../assets/img/token-sales.png";

const EcosystemCard = ({ title, description }) => {
  return (
    <div className="ecosystem-card ">
      <div className="ecosystem-card__top py-4">
        <img src={tokenSales} />
      </div>
      <div className="ecosystem-card__bottom py-4 px-md-3 p-1">
        <p className="ecosystem-card__title  mb-0">{title}</p>
        <p className="ecosystem-card__description mb-0 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default EcosystemCard;
