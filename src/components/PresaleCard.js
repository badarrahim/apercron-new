import React from "react";
import moment from "moment";
import CountDown from "react-countdown";
import { Button, Col, Row } from "reactstrap";
import presale from "../assets/img/presale-img.png";
function PresaleCard ({ launchpad }) {
  // moment.duration(moment().unix(launchpad?.launchTime).diff(moment().unix(launchpad?.endTime)));
  let endTime = moment.unix(launchpad?.endTime);
  let startTime = moment.unix(launchpad?.launchTime);
  let diff = moment.duration(endTime.diff(startTime)).asDays();
  return (
    <div className="presale-card py-5">
      <Row className="px-5">
        <Col xs="6">
          <img src={launchpad?.logoUrl || presale} />
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <div className="d-flex justify-content-center align-items-center presale-card__status px-3 py-2">
            <i className="fa fa-circle mr-2" aria-hidden="true"></i>
            <span>Upcoming</span>
          </div>
        </Col>
        <Col xs="12" className="mt-2">
          <span className="presale-card__heading">{launchpad?.tokenName}</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-heading">Fair Lunch</span>
        </Col>

        <Col xs="12" className="mt-3">
          <span className="presale-card__sub-1">Soft</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-2">{launchpad?.totalTokenForSale} {launchpad?.tokenSymbol}</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-3">Progress</span>
        </Col>
        <Col xs="12">
          {/* <hr className="presale-card__hr" /> */}
          <div className="presale-card__hr my-3"></div>
        </Col>

        <Col xs="6">
          <span className="presale-card__light">{launchpad?.softcap} cro</span>
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <span className="presale-card__light">{launchpad?.hardcap} cro</span>
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
          <span className="presale-card__light">{Math.ceil(diff)} days</span>
        </Col>
      </Row>

      <Row className="mt-4 px-5 ">
        <Col xs="6">
          <span className="presale-card__white">Sales starts in</span>
          <br />
          <span className="presale-card__light"> <CountDown date={new Date(parseInt(launchpad?.launchTime) * 1000)}><span>Already Started</span></CountDown></span>
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <Button className="presale-card__pool-btn">View Pool</Button>
        </Col>
      </Row>
    </div>
  );
}

export default PresaleCard;
