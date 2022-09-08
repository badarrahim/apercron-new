import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p className="section-title">{title}</p>
      <p className="section-description">{description}</p>
    </div>
  );
};

export default SectionTitle;
