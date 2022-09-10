import React from "react";
import { Col, Row } from "reactstrap";
import SectionTitle from "./SectionTitle";
import ProtocolCard from "./ProtocolCard";

const LaunchpadProtocl = () => {
  return (
    <div className="launchpad-protocol px-md-3 py-5 px-2">
      <SectionTitle
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
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
