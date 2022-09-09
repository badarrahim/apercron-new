import React from "react";
import { Col, Row } from "reactstrap";
import SectionTitle from "./SectionTitle";
import EcosystemCard from "./EcosystemCard";
import ProtocolCard from "./ProtocolCard";
import TokesSalesCard from "./TokesSalesCard";

const Ecosystem = () => {
  return (
    <div className="launchpad-protocol px-md-3 py-5 px-2">
      <SectionTitle
        title="A Growing Protocol Ecosystem."
        description="We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!"
      />

      <Row className="mt-5">
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          />
          {/* <EcosystemCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          /> */}
        </Col>
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          />
          {/* <EcosystemCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          /> */}
        </Col>
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          />
          {/* <EcosystemCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          /> */}
        </Col>

        <Col xs="12" className="d-flex justify-content-center">
          <span className="disclaimer pt-5 ">
            Disclaimer: The information provided shall not in any way constitute
            a recommendation as to whether you should invest in any product
            discussed. We accept no liability for any loss occasioned to any
            person acting or refraining from action as a result of any material
            provided or published.
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;
