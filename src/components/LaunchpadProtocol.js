import React from "react";
import { Col, Row } from "reactstrap";
import SectionTitle from "./SectionTitle";
import ProtocolCard from "./ProtocolCard";

const LaunchpadProtocl = () => {
  return (
    <div className="launchpad-protocol px-md-3 py-5 px-2">
      <SectionTitle
        title="Apecron Launchpad"
        description="Apecron is the most 
        revolutionary launchpad to incentivise investors and project owners
        ."
      />
      {/* 
      <Row className="mt-5">
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="$235.8M" description="Total Funds Raised" />
        </Col>
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="$300M" description="Total Funds Locked" />
        </Col>
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="1000" description="Total Participants" />
        </Col>
        <Col md="6" lg="3" className="mt-3 mt-lg-0">
          <ProtocolCard title="3454" description="Total Sales Created" />
        </Col>
      </Row> */}
    </div>
  );
};

export default LaunchpadProtocl;
