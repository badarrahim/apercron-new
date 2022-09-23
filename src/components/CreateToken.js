import React, { useState } from "react";
// import { Stepper } from "react-form-stepper";
import moment from "moment";
import { Steps } from "antd";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { configEnv } from "../utils/configEnv";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentContractSelected } from "../store/web3-slice";
import { verifyTokenAddress } from "../utils/web3-helpers";
import { create as ipfsHttpClient } from 'ipfs-http-client';

const client = ipfsHttpClient({ url: 'https://ipfs.infura.io:5001/api/v0' });

const { Step } = Steps;

const CreateToken = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const {selectedChainID} = useSelector(state=>state?.web3Slice);
  const [tokenAddress,setTokenAddress] = useState("");
  const [currencySelected,setCurrencySelected] = useState(configEnv?.[selectedChainID]?.currency)
  const [isContractValid,setContractValid] = useState(false);

  const [presaleRate,setPresaleRate] = useState(0);
  const [softcap,setSoftcap] = useState(0);
  const [hardcap,setHardcap] = useState(0);
  const [isRefund,setIsRefund] = useState(true);
  const [startTime,setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [logoUrl, setLogoUrl] = useState('');
  const [website, setWebsite] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const [telegram, setTelegram] = useState('');
  const [instagram, setInstagram] = useState('');
  const [discord, setDiscord] = useState('');
  const [reddit, setReddit] = useState('');
  const [youtube, setYoutube] = useState('');
  const [description, setDescription] = useState('');
  const [uri, setUri] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="py-5">
      <div className="d-none d-lg-block">
        <Steps
          current={currentStep}
          responsive
          className="my-5 py-5 horizonal-step "
        >
          <Step title="Verify Token" />
          <Step
            title="DeFi Launchpad Info"
            description="Enter the launchpad information that you want to raise , that should be enter all details about your presale"
          />
          <Step
            title="Add Additional Info"
            description="Let people know who you are"
          />
          <Step title="Finish" description="Review your information" />
        </Steps>
      </div>
      <div className="d-block d-lg-none">
        <Steps
          direction="vertical"
          current={currentStep}
          responsive
          className="my-5 py-3"
        >
          <Step title="Verify Token" />
          <Step
            title="DeFi Launchpad Info"
            description="Enter the launchpad information that you want to raise , that should be enter all details about your presale"
          />
          <Step
            title="Add Additional Info"
            description="Let people know who you are"
          />
          <Step title="Finish" description="Review your information" />
        </Steps>
      </div>

      <div className="create-token p-4 p-md-5 mt-5">
        {currentStep == 0 && (
          <Row>
            <Col xs="12">
              <span className="create-token__light">
                (*) is required field.
              </span>
            </Col>
            <Col md="6" className="mt-2">
              <span className="create-token__heading">Token Address*</span>
            </Col>
            <Col
              md="6"
              className="d-flex justify-content-start justify-content-md-end align-items-center mt-2"
            >
              <Button className="custome-btn">Create Token</Button>
            </Col>
            <Col xs="12" className="mt-3">
              <Input placeholder="Apecron" value={tokenAddress} onChange={async (e)=>{
                setTokenAddress(e?.target?.value);
                const res = await verifyTokenAddress(e?.target?.value)
                setContractValid(res?.success)

              }}></Input>
              {tokenAddress && !isContractValid && <div className="create-token_error">Token address is invalid</div>}
            </Col>
            {/* <Col xs="12" className="mt-3">
            <span className="create-token__sub">Pool Creation free: 1 BNB</span>
          </Col> */}

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Currency</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" value={configEnv?.[selectedChainID]?.currency} checked={currencySelected==configEnv?.[selectedChainID]?.currency}  onClick={()=>{
                    setCurrencySelected('ETH');
                    dispatch(setCurrentContractSelected('ApercronLaunchpadEth'))
                    }}/>
                  <span>{configEnv?.[selectedChainID]?.currency}</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" value='USDT' checked={currencySelected=='USDT'} onClick={()=>{
                    setCurrencySelected('USDT');
                    dispatch(setCurrentContractSelected('ApercronLaunchpadUSDT'))
        }}/> <span>USDT</span>
                </Label>
              </FormGroup>

              <span className="create-token__sub-label">
                Users will pay with {currencySelected} for your token
              </span>
            </Col>

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Fee options</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio2" checked/>{" "}
                  <span>2% {currencySelected} raised + 3% tokens for distribution</span>
                </Label>
              </FormGroup>
            </Col>

            <Col
              xs="12"
              className=" d-flex justify-content-center align-items-center p-3 mb-5"
            >
              <Button
                onClick={() => {
                  if(!tokenAddress || !isContractValid){
                    return; 
                  }
                  setCurrentStep(1)
                }}
                className="custome-btn-lg"
              >
                Next
              </Button>
            </Col>
          </Row>
        )}

        {currentStep == 1 && (
          <Form onSubmit={(e) => {
            e.preventDefault();
            setCurrentStep(2);
          }}>
          <Row>
            <Col xs="12">
              <span className="create-token__light">
                (*) is required field.
              </span>
            </Col>
            <Col md="12" className="mt-2">
              <FormGroup>
                <Label className="create-token__label">Presale rate*</Label>
                  <Input placeholder="0" type='number' required min={1} onChange={(e) => setPresaleRate(e.target.value)} />
                <p className="mb-0 create-token__danger">
                  Presale rate must be positive number
                </p>
                <span className="create-token__primary">
                  If 1 spend 1 {currencySelected} how many tokens i will receive?
                </span>
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Softcap (cro)*</Label>
                  <Input type='number' required onChange={e => setSoftcap(e.target.value)} min={1} />
                <span className="create-token__primary">
                  Softcap must be >=50% of hardcap
                </span>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Hardcap (cro)*</Label>
                  <Input type="number" required onChange={e => setHardcap(e.target.value)} min={1} />
              </FormGroup>
            </Col>

            <Col md="12">
              <FormGroup>
                <Label className="create-token__label">Refund type</Label>
                <Input type="select">
                  <option default>Burn</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="12" className="my-4">
              <span className="create-token__primary">
                Enter the percentage of raised funds that should be allocating
                to liquidity on (Min 51% Max 100%)
              </span>
              <br />
              <span className="create-token__primary">
                If i spend 1 cro on how many tokens will i receive? Usually this
                amount is lower than presale rate to allow for a higher listing
                price on
              </span>
            </Col>

            <Col md="12">
              <Label className="create-token__label">
                Select start time & end time (UTC)*
              </Label>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Start time (UTC)*</Label>
                  <Input type="time" required onChange={e => setStartTime(moment().set("hour", e.target.value.split(':')[0]).set("minute", e.target.value.split(':')[1]).unix())} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">End time (UTC)*</Label>
                  <Input type="time" onChange={e => setEndTime(moment().set("hour", e.target.value.split(':')[0]).set("minute", e.target.value.split(':')[1]).unix())} />
              </FormGroup>
            </Col>

            <Col xs="12">
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check className="ml-3">
                  Using vesting contributor?
                </Label>
              </FormGroup>
            </Col>

            <Col
              xs="12"
              className=" d-flex justify-content-center align-items-center p-3 my-5"
            >
              <Button
                onClick={() => setCurrentStep(0)}
                className="custome-btn-lg mr-2"
              >
                Back
              </Button>
                <Button
                  type="submit"
                // onClick={() => setCurrentStep(2)}
                className="custome-btn-lg"
              >
                Next
              </Button>
            </Col>
            </Row></Form>
        )}

        {currentStep == 2 && (
          <Form onSubmit={async (e) => {
            e.preventDefault();
            const data = {
              logoUrl, website, facebook, twitter, github, telegram, instagram, discord, reddit, youtube, description
            };
            const parsed = JSON.stringify(data);
            try {
              const added1 = await client.add(parsed);
              let tokenUri1 = `https://ipfs.infura.io/ipfs/${added1.path}`;
              // this.setState({ tokenUri: tokenUri1 });
              console.log({ tokenUri1 });
              setUri(tokenUri1);
              setCurrentStep(3);
              /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
              // createSale(url)
            } catch (error) {
              alert('Error uploading file: ', error);
              console.log('Error uploading file: ', error);
              setCurrentStep(3);
            }
          }}>
          <Row>
            <Col xs="12">
              <span className="create-token__light">
                (*) is required field.
              </span>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Logo URL*</Label>
                  <Input type='text' required onChange={(e) => setLogoUrl(e.target.value)} />
                <p className="create-token__primary mb-0">
                  URL must end with supported extension .png.jpg.jpej.gif you
                  can upload your image at{" "}
                </p>
                <a href="#" className="create-token__danger">
                  https://apercron-da8ac.web.app/
                </a>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Website*</Label>
                  <Input type="text" required onChange={e => setWebsite(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Facebook</Label>
                  <Input type="text" onChange={e => setFacebook(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Twitter</Label>
                  <Input type="text" onChange={e => setTwitter(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Github</Label>
                  <Input type="text" onChange={e => setGithub(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Telegram</Label>
                  <Input type="text" onChange={e => setTelegram(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Instagram</Label>
                  <Input type="text" onChange={e => setInstagram(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label className="create-token__label">Discord</Label>
                  <Input type="text" onChange={e => setDiscord(e.target.value)} />
              </FormGroup>
            </Col>

            <Col md="12">
              <FormGroup>
                <Label className="create-token__label">Reddit</Label>
                  <Input type="text" onChange={e => setReddit(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label className="create-token__label">Youtube video</Label>
                  <Input type="text" onChange={e => setYoutube(e.target.value)} />
                <span className="create-token__primary">
                  input your your youtube URL, or youtube video ID.
                </span>
              </FormGroup>
            </Col>

            <Col md="12">
              <FormGroup>
                <Label className="create-token__label">Description</Label>
                  <Input type="textarea" rows="5" onChange={e => setDescription(e.target.value)} />
              </FormGroup>
            </Col>

            <Col
              xs="12"
              className=" d-flex justify-content-center align-items-center p-3 my-5"
            >
              <Button
                onClick={() => setCurrentStep(1)}
                className="custome-btn-lg mr-2"
              >
                Back
              </Button>
                <Button
                  type='submit'
                // onClick={() => setCurrentStep(3)}
                className="custome-btn-lg"
              >
                Next
              </Button>
            </Col>
            </Row></Form>
        )}

        {currentStep == 3 && (
          <Row className="create-token__last">
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Total token</span>
              <span className="ml-auto create-token__danger">15000</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Factory address</span>
              <div className="ml-auto d-flex align-items-center">
                <span className=" create-token__primary">xxxxxxxx</span>
                <i className="fa fa-copy create-token__danger ml-2"></i>
              </div>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Total Name</span>
              <span className="ml-auto create-token__primary">test</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Total symbol</span>
              <span className="ml-auto create-token__primary">test</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Total decimal</span>
              <span className="ml-auto create-token__primary">0</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Preslae rate</span>
              <span className="ml-auto create-token__primary">{presaleRate}</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Sale method</span>
              <span className="ml-auto create-token__primary">public</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Softcap</span>
              <span className="ml-auto create-token__primary">{softcap} cro</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Hardcap</span>
              <span className="ml-auto create-token__primary">{hardcap} cro</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Unsold tokens</span>
              <span className="ml-auto create-token__primary">Refunded</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Minimum buy</span>
              <span className="ml-auto create-token__primary">0 cro</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Maximum buy</span>
              <span className="ml-auto create-token__primary">0 cro</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Start time</span>
              <span className="ml-auto create-token__primary">{moment.unix(startTime).format('L LT')}</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">End time</span>
              <span className="ml-auto create-token__primary">{moment.unix(endTime).format('L LT')}</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Website</span>
              <span className="ml-auto create-token__danger">
                https://apercron-da8ac.web.app/
              </span>
            </Col>

            <Col
              xs="12"
              className="  mt-3 create-token__bottom d-flex justify-content-center align-items-center p-3 p-md-5 my-5"
            >
              <span>
                For tokens with burns,rebase or other special transfers please
                ensure that you have a way to whitlist multiple addresses or
                turn off the special transfer events (By setting fees to 0 for
                example for the duration of the preslae)
              </span>
            </Col>

            <Col
              xs="12"
              className=" d-flex justify-content-center align-items-center p-3 mb-5"
            >
              <Button
                onClick={() => setCurrentStep(2)}
                className="custome-btn-lg mr-2"
              >
                Back
              </Button>
              <Button
                onClick={() => setCurrentStep(0)}
                className="custome-btn-lg"
              >
                Submit
              </Button>
            </Col>
          </Row>
        )}
      </div>

      <Row>
        <Col
          xs="12"
          className="d-flex justify-content-center align-items-center mt-5 py-5"
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
      {/* <Stepper
        steps={[{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]}
        activeStep={2}
      /> */}

      {/* <div class="wrapper">
        <ol class="c-stepper">
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Step 1</h3>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Step 2</h3>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Step 3</h3>
          </li>
        </ol>
      </div> */}
    </div>
  );
};

export default CreateToken;
