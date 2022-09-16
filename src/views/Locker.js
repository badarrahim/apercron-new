import React, { useState } from "react";
import { Slider, Switch } from "antd";

import {
  Badge,
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import SectionTitle from "../components/SectionTitle";

import gold_badge from "../assets/img/gold_badge.png";

const Locker = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="locker-section py-5">
      <Container>
        {/* <p className="section-title-locker mb-0">
          Smart Liquidity Locker and Token Vesting For Ethereum, Polygon and BSC
        </p>
        <Button className="custome-btn-lg mt-3 mb-5">Get Started</Button> */}

        <div className="pb-5">
          <SectionTitle
            title="Liquidity Locker"
            description="We are allowing lock with Ethereum and Cronos only."
            // description="Lock liquidity pool tokens. Supports Ethereum (Uniswap V2), Polygon(Quickswap), BSC(PancakeSwap)"
          />
          {/* <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
            <Button className="custome-btn-lg">Connect Wallet</Button>
            <Button className="custome-btn-lg mt-2 mt-md-0 ml-md-3">
              Dodge
            </Button>
          </div> */}
        </div>

        <div className="current-presales">
          <Nav tabs className="mt-5">
            <NavItem>
              <NavLink
                className={`${activeTab == "1" ? "active" : ""}`}
                onClick={() => {
                  toggle("1");
                }}
              >
                New Lp Locks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${activeTab == "2" ? "active" : ""} ml-md-4`}
                onClick={() => {
                  toggle("2");
                }}
              >
                My Locks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${activeTab == "3" ? "active" : ""} ml-md-4`}
                onClick={() => {
                  toggle("3");
                }}
              >
                All Locks
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="mt-5">
                <Col xs="12">
                  <div className="locker-card px-4 pt-2 pb-5 px-md-5 ">
                    <Row>
                      <Col xs="12">
                        <Label className="locker-card__heading">
                          Lp Pair Address
                        </Label>
                      </Col>
                      <Col md="9" className="mt-2">
                        <Input placeholder="apercron" />
                      </Col>
                      <Col md="3" className="mt-3 mt-md-0 pl-3">
                        <span>Please Connect Wallet to get started</span>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col xs="12" className="mt-5">
                  <div className="locker-card px-4 pt-2 pb-5 px-md-5 ">
                    <Row>
                      <Col xs="12">
                        <Label className="locker-card__heading">
                          LP Pair Amount
                        </Label>
                      </Col>

                      <Col xs="12" className="mt-3 mt-md-0  d-flex">
                        <span>0.0000</span>{" "}
                        <span className="ml-auto">
                          Balance <br /> 0
                        </span>
                      </Col>

                      <Col xs="12" className="d-flex flex-column mb-3">
                        <Slider defaultValue={30} />
                        <span className="locker-card__heading ml-auto">0%</span>
                      </Col>
                      <Col xs="6" md="3">
                        <Badge>
                          <span className="locker-card__heading">25%</span>
                        </Badge>
                      </Col>
                      <Col xs="6" md="3">
                        <Badge>
                          <span className="locker-card__heading">50%</span>
                        </Badge>
                      </Col>
                      <Col xs="6" md="3" className="mt-2 mt-md-0">
                        <Badge>
                          <span className="locker-card__heading">75%</span>
                        </Badge>
                      </Col>
                      <Col xs="6" md="3" className="mt-2 mt-md-0">
                        <Badge>
                          <span className="locker-card__heading">Max</span>
                        </Badge>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col xs="12" className="mt-5">
                  <div className="locker-card px-4 pt-2 pb-5 px-md-5 ">
                    <Row>
                      <Col xs="12">
                        <Label className="locker-card__heading">
                          LP Period
                        </Label>
                      </Col>

                      <Col
                        xs="12"
                        className="my-3  d-flex flex-column flex-md-row"
                      >
                        <span>Mon sep 12 2022</span>{" "}
                        <span className="ml-md-auto">
                          Will lock for a few seconds ago
                        </span>
                      </Col>

                      <Col xs="6" md="3" className="mb-4">
                        <Input type="date" />
                      </Col>

                      <Col xs="6" md="3" className="mb-4">
                        <Input type="time" />
                      </Col>

                      <Col xs="12" className="d-flex flex-column mb-3">
                        <Slider defaultValue={30} />
                        <span className="locker-card__heading ml-auto">
                          0.00%
                        </span>
                      </Col>
                      <Col xs="12" sm="6" lg="3">
                        <Badge>
                          <span className="locker-card__heading">3 Months</span>
                        </Badge>
                      </Col>
                      <Col xs="12" sm="6" lg="3" className="mt-2 mt-lg-0">
                        <Badge>
                          <span className="locker-card__heading">6 Months</span>
                        </Badge>
                      </Col>
                      <Col xs="12" sm="6" lg="3" className="mt-2 mt-lg-0">
                        <Badge>
                          <span className="locker-card__heading">1 Year</span>
                        </Badge>
                      </Col>
                      <Col xs="12" sm="6" md="3" className="mt-2 mt-lg-0">
                        <Badge>
                          <span className="locker-card__heading">5 Year</span>
                        </Badge>
                      </Col>

                      <Col xs="12" className="mt-3">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />{" "}
                            <span>Flat Feet: 150 on cronos</span>
                            {/* <span>Flat Feet: 200 WDoge</span> */}
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col xs="12">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />{" "}
                            <span>Flat Feet: 0.01 on eth </span>
                          </Label>
                        </FormGroup>
                      </Col>

                      <Col xs="12" className="d-flex mt-4 flex-wrap">
                        <Button className="custome-btn-lg mr-sm-2">
                          Approve
                        </Button>

                        <Button className="custome-btn-lg mt-2 mt-sm-0 d-none d-md-flex">
                          Lock
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row className="mt-5">
                <Col xs="12">
                  <div className="lock-card px-3 px-md-4 pt-2 pb-4 pt-4 ">
                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2 mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          SafeMoon (SAFEMOON)
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 3 months ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2  mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          BUSD Token (BUSD){" "}
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 3 months ago
                        </span>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2  mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          BUSD Token (BUSD){" "}
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 3 months ago
                        </span>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2  mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          BUSD Token (BUSD)
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 2 months ago{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row className="mt-5">
                <Col xs="12">
                  <div className="lock-card px-3 px-md-4 pt-2 pb-4 pt-4 ">
                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2 mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          SafeMoon (SAFEMOON)
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 3 months ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2  mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          BUSD Token (BUSD){" "}
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 3 months ago
                        </span>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2  mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          BUSD Token (BUSD){" "}
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 3 months ago
                        </span>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center justify-content-sm-start lock-card__inner mb-2">
                      <div className="lock-card__badge mt-2  mr-0 mr-sm-3">
                        <img src={gold_badge} />
                      </div>
                      <div className="mt-2 d-flex flex-column justify-content-center">
                        <p className="lock-card__title mb-0">
                          BUSD Token (BUSD)
                        </p>
                        <span className="lock-card__description">
                          starts unlocking in 2 months ago{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </div>
  );
};

export default Locker;
