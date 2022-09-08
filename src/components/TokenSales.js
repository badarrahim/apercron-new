import React from "react";
import { Col, Row } from "reactstrap";
import SectionTitle from "./SectionTitle";
import ProtocolCard from "./ProtocolCard";
import TokesSalesCard from "./TokesSalesCard";

const TokenSales = () => {
  return (
    <div className="launchpad-protocol px-md-3 py-5 px-2">
      <SectionTitle
        title="A Suite of Tools for Token Sales."
        description="A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!"
      />

      <Row className="mt-5">
        <Col md="4" className="mt-3 mt-md-0">
          <TokesSalesCard
            title="Standard"
            description="Mint standard tokens on ETH,BSC,
            AVAX, Fantom, Polygon."
          />
        </Col>
        <Col md="4" className="mt-3 mt-md-0">
          <TokesSalesCard
            title="Standard"
            description="Mint standard tokens on ETH,BSC,
 AVAX, Fantom, Polygon."
          />
        </Col>
        <Col md="4" className="mt-3 mt-md-0">
          <TokesSalesCard
            title="Standard"
            description="Mint standard tokens on ETH,BSC,
 AVAX, Fantom, Polygon."
          />
        </Col>
      </Row>
    </div>
  );
};

export default TokenSales;
