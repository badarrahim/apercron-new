import React from "react";
import { Container } from "reactstrap";
import TokenSection from "../components/CreateToken";

const CreateToken = () => {
  return (
    <div className="token-section">
      <Container>
        <TokenSection />
      </Container>
    </div>
  );
};

export default CreateToken;
