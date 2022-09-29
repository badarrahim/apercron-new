
import React, { useState } from "react";
import moment from "moment";
import CountDown from "react-countdown";
import Web3 from 'web3';
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
  Form
} from "reactstrap";
import presale from "../assets/img/presale-img.png";
import Timer from "./Timer";
import { buyToken, buyTokenWithEth, buyTokenWithUSDT, getTotalLaunchPads } from "../utils/web3-helpers";
import { configEnv } from "../utils/configEnv";
import { useSelector } from "react-redux";
function PresaleCard ({ launchpad }) {
  const [viewPool, setViewPool] = useState(false);
  const [launchData, setLaunchData] = useState(null);
  const [launchId, setLaunchId] = useState('');
  const [tokenAmount, setTokenAmount] = useState(0);
  const [contractType, setContractType] = useState('');
  const [tokenPerEth, setTokenPerEth] = useState('');
  const viewPoolToggle = () => {
    setViewPool(!viewPool);
  };
  const { selectedChainID, userAddress } = useSelector(state => state?.web3Slice);

  let endTime = moment.unix(launchpad?.endTime);
  let startTime = moment.unix(launchpad?.launchTime);
  let diff = moment.duration(endTime.diff(startTime)).asDays();
  let currentTime = moment().valueOf();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const getStatus = (launchPad) => {
    if (moment.unix(launchPad?.launchTime).valueOf() > currentTime) {
      return 'Upcoming';
    } else if (moment.unix(launchPad?.launchTime).valueOf() < currentTime && moment.unix(launchPad?.endTime).valueOf() > currentTime) {
      return 'Started';
    } else if (moment.unix(launchPad?.endTime).valueOf() < currentTime) {
      return 'Ended';
    }
  }
  return (
    <div className="presale-card py-5">
      <Row className="px-5">
        <Col xs="6">
          <img src={launchpad?.logoUrl || presale} />
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <div className="d-flex justify-content-center align-items-center presale-card__status px-3 py-2">
            <i className="fa fa-circle mr-2" aria-hidden="true"></i>
            <span>{launchpad && getStatus(launchpad)}</span>
          </div>
        </Col>
        <Col xs="12" className="mt-2">
          <span className="presale-card__heading">{launchpad?.tokenName}</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-heading">{launchpad?.isFairLaunch ? 'Fair Launch' : 'Pre Sale'}</span>
        </Col>

        <Col xs="12" className="mt-3">
          <span className="presale-card__sub-1">Soft</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-2">{launchpad?.totalTokenForSale?.length > 17 ? Web3.utils.fromWei(launchpad?.totalTokenForSale, 'ether') : launchpad?.totalTokenForSale} {launchpad?.tokenSymbol}</span>
        </Col>
        <Col xs="12">
          <span className="presale-card__sub-3">Progress</span>
        </Col>
        <Col xs="12">
          {/* <hr className="presale-card__hr" /> */}
          <div className="presale-card__hr my-3"></div>
        </Col>

        <Col xs="6">
          <span className="presale-card__light">{launchpad?.softcap?.length > 17 ? Web3.utils.fromWei(launchpad?.softcap, 'ether') : launchpad?.softcap} {launchpad?.contractType == 'ApercronLaunchpadEth' ? configEnv[selectedChainID].currency : 'USDT'}</span>
        </Col>
        <Col xs="6" className="d-flex justify-content-end align-items-center">
          <span className="presale-card__light">{launchpad?.hardcap?.length > 17 ? Web3.utils.fromWei(launchpad?.hardcap, 'ether') : launchpad?.hardcap} {launchpad?.contractType == 'ApercronLaunchpadEth' ? configEnv[selectedChainID].currency : 'USDT'}</span>
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
          <Button className="presale-card__pool-btn" onClick={() => {
            setLaunchId(launchpad?.id);
            setContractType(launchpad?.contractType);
            setTokenPerEth(launchpad?.tokenPerEth);
            setLaunchData(launchpad)
            viewPoolToggle();
          }}>
            View Pool
          </Button>
        </Col>
      </Row>

      <Modal toggle={viewPoolToggle} isOpen={viewPool} className="px-2">
        <ModalBody className="px-2 py-4 px-md-4">
          <Form onSubmit={(e) => {
            e.preventDefault();
            if (launchData && getStatus(launchData) == 'Started') {
              if (contractType == "ApercronLaunchpadEth") {
                buyTokenWithEth(launchId, tokenAmount, tokenPerEth, contractType).then((result) => {
                  if (result?.success) {
                    setLaunchId('');
                    setTokenAmount(0);
                    setContractType('');
                    setTokenPerEth('');
                    viewPoolToggle();
                    getTotalLaunchPads();
                  } else {
                    setLaunchId('');
                    setTokenAmount(0);
                    setContractType('');
                    setTokenPerEth('');
                    viewPoolToggle();
                  }
                });
              } else if (contractType == "ApercronLaunchpadUSDT") {
                buyTokenWithUSDT(launchId, tokenAmount, tokenPerEth, contractType).then((result) => {
                  if (result?.success) {
                    setLaunchId('');
                    setTokenAmount(0);
                    setContractType('');
                    setTokenPerEth('');
                    viewPoolToggle();
                    getTotalLaunchPads();
                  } else {
                    setLaunchId('');
                    setTokenAmount(0);
                    setContractType('');
                    setTokenPerEth('');
                    viewPoolToggle();
                  }
                });
              }
            } else if (launchData && getStatus(launchData) == 'Upcoming') {
              alert('Launch is not started yet.');
            } else if (launchData && getStatus(launchData) == 'Ended') {
              alert('Launch is ended')
            }
          }}>
            <Row>
              <Col xs="12">
                <Card className="view-pool-card  p-2 px-md-3">
                  <span>Make sure the website is apecron</span>
                </Card>
              </Col>
              {/* Ends in  */}
              {moment.unix(launchData?.launchTime).valueOf() < moment().valueOf() && moment.unix(launchData?.endTime).valueOf() > moment().valueOf() &&
                <Col xs="12 d-flex justify-content-center align-items-center flex-column mt-2 ">
                  <span className="mb-1 timer-heading">Presale ends in</span>
                  <Timer expiryTimestamp={new Date(moment.unix(launchData?.endTime))} />
                </Col>
              }
              {/* Start in   */}
              {moment.unix(launchData?.launchTime).valueOf() > moment().valueOf() &&
                <Col xs="12 d-flex justify-content-center align-items-center flex-column mt-2 ">
                  <span className="mb-1 timer-heading">Presale Starts in</span>
                  <Timer expiryTimestamp={new Date(moment.unix(launchData?.launchTime))} />
                </Col>
              }

              {/* <Col xs="12" className="mt-4">
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
                    <span style={progresstext}>{`${progress}%`}</span>
                  </div>
                </div>
              </Col> */}
              {/* <Col xs="12" className="d-flex  py-2">
                <span className="mr-auto text-white">87.7 cros</span>
                <span className="ml-auto create-token__primary">50 cros</span>
              </Col> */}
              <Col md="12">
                <FormGroup>
                  <Label className="create-token__label">Amount</Label>
                  <Input type="number" className="view-pool__input" value={tokenAmount} required min={1} onChange={e => setTokenAmount(e.target.value)} />
                </FormGroup>
              </Col>

              <Col xs="12 d-flex justify-content-center align-items-center mt-3">
                <Button type="submit" className="view-pool__btn">
                  <i className="fa fa-check ml-auto mr-2"></i>Buy with {launchData?.contractType == 'ApercronLaunchpadEth' ? configEnv[selectedChainID].currency : 'USDT'}
                </Button>
              </Col>

              <Col xs="12" className="mt-4">
                <Card className="view-pool-card  p-2 px-md-3">
                  <Col
                    xs="12"
                    className="d-flex create-token__border-bottom py-2"
                  >
                    <span className="mr-auto text-white">Status</span>
                    <span className="ml-auto ">{launchData && getStatus(launchData)}</span>
                  </Col>
                  <Col
                    xs="12"
                    className="d-flex create-token__border-bottom py-2"
                  >
                    <span className="mr-auto text-white">Current Rate</span>
                    <span className="ml-auto ">1 {launchData?.contractType == 'ApercronLaunchpadEth' ? configEnv[selectedChainID].currency : 'USDT'}={launchData?.tokenPerEth?.length > 17 ? Web3.utils.fromWei(launchData?.tokenPerEth, 'ether') : launchData?.tokenPerEth}</span>
                  </Col>
                  <Col
                    xs="12"
                    className="d-flex create-token__border-bottom py-2"
                  >
                    <span className="mr-auto text-white">Total Sold</span>
                    <span className="ml-auto ">{launchData && Web3.utils.fromWei(launchData?.totalSoldToken?.toString(), 'ether')}</span>
                  </Col>
                  {/* <Col
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
                  </Col> */}
                </Card>
              </Col>
            </Row></Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PresaleCard;
