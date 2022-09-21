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
        title="Create with Apecron"
        description="Create a fully decentralized token or presale
       "
      />

      <Row className="mt-5">
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            title="Create Presale"
            // description="Create Presale"
          />
          {/* <EcosystemCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          /> */}
        </Col>
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            title="Create Fair Launch"
            // description="Create Fair Launch"
          />
          {/* <EcosystemCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          /> */}
        </Col>
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            title="Create Token"
            // description="Create Token"
          />
          {/* <EcosystemCard
            title="PinkMoon"
            description="The best launchpad for professional teams"
          /> */}
        </Col>

        <Col xs="12" className="d-flex justify-content-center">
          <span className="disclaimer pt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;
