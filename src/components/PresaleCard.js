import React from "react";
import { Button, Col, Row } from "reactstrap";
import presale from "../assets/img/presale-img.png";
function PresaleCard() {
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
          <Button className="presale-card__pool-btn">View Pool</Button>
        </Col>
      </Row>
    </div>
  );
}

export default PresaleCard;
