import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
import presale from "../assets/img/presale-img.png";
import Timer from "./Timer";
function PresaleCard() {
  const [viewPool, setViewPool] = useState(false);
  const viewPoolToggle = () => {
    setViewPool(!viewPool);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="presale-card py-5">
      <Row className="px-5">
        <Col xs="6">
          <img src={presale} />
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <div className="d-flex justify-content-center align-items-center presale-card__status px-3 py-2">
            <i className="fa fa-circle mr-2" aria-hidden="true"></i>
            <span>Upcoming</span>
          </div>
        </Col>
        <Col xs="12" className="mt-2">
          <span className="presale-card__heading">Puchie Inu</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-heading">Fair Lunch</span>
        </Col>

        <Col xs="12" className="mt-3">
          <span className="presale-card__sub-1">Soft</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-2">100 BNV</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-3">Progress</span>
        </Col>
        <Col xs="12">
          {/* <hr className="presale-card__hr" /> */}
          <div className="presale-card__hr my-3"></div>
        </Col>

        <Col xs="6">
          <span className="presale-card__light">0 cro</span>
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <span className="presale-card__light">50 cro</span>
        </Col>
        <Col xs="6">
          <span className="presale-card__light">Liquidity</span>
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <span className="presale-card__light">55%</span>
        </Col>
        <Col xs="6">
          <span className="presale-card__light">Lockup time</span>
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <span className="presale-card__light">100 days</span>
        </Col>
      </Row>

      <Row className="mt-4 px-5 ">
        <Col xs="6">
          <span className="presale-card__white">Sales stars in</span>
          <br />
          <span className="presale-card__light">00:09:00</span>
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <Button className="presale-card__pool-btn" onClick={viewPoolToggle}>
            View Pool
          </Button>
        </Col>
      </Row>

      <Modal toggle={viewPoolToggle} isOpen={viewPool} className="px-2">
        <ModalBody className="px-2 py-4 px-md-4">
          <Row>
            <Col xs="12">
              <Card className="view-pool-card  p-2 px-md-3">
                <span>Make sure the website is apecron</span>
              </Card>
            </Col>
            <Col xs="12 d-flex justify-content-center align-items-center flex-column mt-2 ">
              <span className="mb-1 timer-heading">Presale ends in</span>
              <Timer expiryTimestamp={time} />
            </Col>
            <Col xs="12" className="mt-4">
              <div
                style={{
                  height: "17px",
                  width: "100%",
                  backgroundColor: "whitesmoke",
                  borderRadius: 40,
                }}
              >
                <div
                  className="progress-ba__sub"
                  style={{
                    height: "100%",
                    width: `50%`,
                    backgroundColor: "rgb(36 131 255 / 75%)",
                    borderRadius: 38,
                    textAlign: "right",
                  }}
                >
                  {/* <span style={progresstext}>{`${progress}%`}</span> */}
                </div>
              </div>
            </Col>
            <Col xs="12" className="d-flex  py-2">
              <span className="mr-auto text-white">87.7 cros</span>
              <span className="ml-auto create-token__primary">50 cros</span>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label className="create-token__label">Amount</Label>
                <Input className="view-pool__input" />
              </FormGroup>
            </Col>

            <Col xs="12 d-flex justify-content-center align-items-center mt-3">
              <Button className="view-pool__btn">
                <i className="fa fa-check ml-auto mr-2"></i>Buy with cros
              </Button>
            </Col>

            <Col xs="12" className="mt-4">
              <Card className="view-pool-card  p-2 px-md-3">
                <Col
                  xs="12"
                  className="d-flex create-token__border-bottom py-2"
                >
                  <span className="mr-auto text-white">Status</span>
                  <span className="ml-auto ">in progress</span>
                </Col>
                <Col
                  xs="12"
                  className="d-flex create-token__border-bottom py-2"
                >
                  <span className="mr-auto text-white">Current Rate</span>
                  <span className="ml-auto ">1 cro=399999</span>
                </Col>
                <Col
                  xs="12"
                  className="d-flex create-token__border-bottom py-2"
                >
                  <span className="mr-auto text-white">Total Contributors</span>
                  <span className="ml-auto ">0</span>
                </Col>
                <Col
                  xs="12"
                  className="d-flex create-token__border-bottom py-2 mb-2"
                >
                  <span className="mr-auto text-white">You Purchased</span>
                  <span className="ml-auto  ">0 cro</span>
                </Col>
              </Card>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PresaleCard;
