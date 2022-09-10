import React from "react";
import SectionTitle from "./SectionTitle";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";
import { useState } from "react";
import PresaleCard from "./PresaleCard";

const CurrentPresales = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="current-presales px-md-3 py-5 px-2">
      <SectionTitle title="Current Presales" />

      <Nav tabs className="mt-5">
        <NavItem>
          <NavLink
            className={`${activeTab == "1" ? "active" : ""}`}
            onClick={() => {
              toggle("1");
            }}
          >
            All launchpads
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${activeTab == "2" ? "active" : ""} ml-md-4`}
            onClick={() => {
              toggle("2");
            }}
          >
            My Contributors
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="mt-5">
            <Col xs="12" lg="8">
              <Input
                placeholder="Enter your token symbol"
                className="token-input "
              />
            </Col>
            <Col xs="6" lg="2">
              <Label>Filter By</Label>
              <Input type="select" className="token-select">
                <option default>All Status</option>
              </Input>
            </Col>
            <Col xs="6" lg="2">
              <Label>Sort By</Label>
              <Input type="select" className="token-select">
                <option default>All Status</option>
              </Input>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg="6" className="mt-3 mt-lg-0">
              <PresaleCard />
            </Col>
            <Col lg="6" className="mt-3 mt-lg-0">
              <PresaleCard />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2"></TabPane>
      </TabContent>

      <Row>
        <Col
          xs="12"
          className="d-flex justify-content-center align-items-center mt-5"
        >
          <span className="disclaimer">
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

export default CurrentPresales;
