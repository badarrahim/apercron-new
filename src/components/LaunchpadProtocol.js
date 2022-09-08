import React from "react";
import { Col, Row } from "reactstrap";
import SectionTitle from "./SectionTitle";
import ProtocolCard from "./ProtocolCard";

const LaunchpadProtocl = () => {
  return (
    <div className="launchpad-protocol px-md-3 py-5 px-2">
      <SectionTitle
        title="The Launchpad Protocol for Everyone!"
        description="PinkSale helps everyone to create their own tokens and token sales in few seconds. Tokens created on PinkSale will be verified and published on explorer websites."
      />

      <Row className="mt-5">
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="$235.8M" description="Total Liquidity Raised" />
        </Col>
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="12345" description="Total Projects" />
        </Col>
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="1.3M" description="Total Participants" />
        </Col>
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="$299.8M" description="Total Values Locked" />
        </Col>
      </Row>
    </div>
  );
};

export default LaunchpadProtocl;
