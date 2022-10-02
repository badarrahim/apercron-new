import React from "react";
import { Container } from "reactstrap";
import CurrentPresales from "../components/CurrentPresales";

const Launchpads = () => {
  return (
    <div className="bottom-section">
      <Container>
        <CurrentPresales />
      </Container>
    </div>
  );
};

export default Launchpads;
