import React from "react";
import { Col, Row } from "reactstrap";
import SectionTitle from "./SectionTitle";
import ProtocolCard from "./ProtocolCard";
import TokesSalesCard from "./TokesSalesCard";

const TokenSales = () => {
  return (
    <div className="launchpad-protocol px-md-3 pb-5 px-2">
      {/* <SectionTitle
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
      /> */}

      <Row className="mt-5">
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            // title="Lorem ipsum"
            description="Create the most advanced tokens without any coding knowledge"
          />
        </Col>
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            // title="Lorem ipsum"
            description="3% tokens distributed to the Apecron holders"
          />
        </Col>
        <Col md="6" lg="4" className="mt-3 mt-lg-0">
          <TokesSalesCard
            // title="Lorem ipsum"
            description="No fee to create a sale with Apecron"
          />
        </Col>
      </Row>
    </div>
  );
};

export default TokenSales;
