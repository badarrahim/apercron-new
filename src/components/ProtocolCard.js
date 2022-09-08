import React from "react";

const ProtocolCard = ({ title, description }) => {
  return (
    <div className="protocol-card px-md-4 py-md-5 p-3 d-flex justify-content-center align-items-center flex-column">
      <p className="mb-0 protocol-card__title">{title}</p>
      <p className="mb-0 protocol-card__description">{description}</p>
    </div>
  );
};

export default ProtocolCard;
