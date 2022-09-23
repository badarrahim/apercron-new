import React, { useState } from "react";
// import { Stepper } from "react-form-stepper";

import { Steps } from "antd";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { configEnv } from "../utils/configEnv";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentContractSelected } from "../store/web3-slice";
import { verifyTokenAddress } from "../utils/web3-helpers";

const { Step } = Steps;

const CreateToken = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {selectedChainID} = useSelector(state=>state?.web3Slice);
  const [tokenAddress,setTokenAddress] = useState("");
  const [currencySelected,setCurrencySelected] = useState(configEnv?.[selectedChainID]?.currency)
  const [isContractValid,setContractValid] = useState(false);
   
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
              {tokenAddress && !isContractValid && "Token address is invalid"}
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
              <Input placeholder="Apecron"></Input>
            </Col>
            {/* <Col xs="12" className="mt-3">
            <span className="create-token__sub">Pool Creation free: 1 BNB</span>
          </Col> */}

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Currency</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>{currencySelected}</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>BUSD</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>USDT</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mb-3 mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>USDC</span>
                </Label>
              </FormGroup>

              <span className="create-token__sub-label">
                Users will pay with {currencySelected} for your token
              </span>
            </Col>

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Free options</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>3% {currencySelected} raised only</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />{" "}
                  <span>2% {currencySelected} raised + 3% tokens</span>
                </Label>
              </FormGroup>
            </Col>

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Free options</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>Auto Listening</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />{" "}
                  <span>Manual Listening</span>
                </Label>
              </FormGroup>
            </Col>

            <Col
              xs="12"
              className="  mt-3 create-token__bottom d-flex justify-content-center align-items-center p-3 p-md-5 my-5"
            >
              <span>
                For auto listing, after you finalize the pool your token will be
                auto listed on DEX.
              </span>
            </Col>

            <Col
              xs="12"
              className=" d-flex justify-content-center align-items-center p-3 mb-5"
            >
              <Button
                onClick={() => setCurrentStep(2)}
                className="custome-btn-lg"
              >
                Next
              </Button>
            </Col>
          </Row>
        )}

        {currentStep == 2 && (
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
              <Input placeholder="Apecron"></Input>
            </Col>
            {/* <Col xs="12" className="mt-3">
            <span className="create-token__sub">Pool Creation free: 1 BNB</span>
          </Col> */}

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Currency</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>{currencySelected}</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>BUSD</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>USDT</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mb-3 mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>USDC</span>
                </Label>
              </FormGroup>

              <span className="create-token__sub-label">
                Users will pay with {currencySelected} for your token
              </span>
            </Col>

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Free options</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>3% {currencySelected} raised only</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />{" "}
                  <span>2% {currencySelected} raised + 3% tokens</span>
                </Label>
              </FormGroup>
            </Col>

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Free options</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>Auto Listening</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />{" "}
                  <span>Manual Listening</span>
                </Label>
              </FormGroup>
            </Col>

            <Col
              xs="12"
              className="  mt-3 create-token__bottom d-flex justify-content-center align-items-center p-3 p-md-5 my-5"
            >
              <span>
                For auto listing, after you finalize the pool your token will be
                auto listed on DEX.
              </span>
            </Col>

            <Col
              xs="12"
              className=" d-flex justify-content-center align-items-center p-3 mb-5"
            >
              <Button
                onClick={() => setCurrentStep(3)}
                className="custome-btn-lg"
              >
                Next
              </Button>
            </Col>
          </Row>
        )}

        {currentStep == 3 && (
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
              <Input placeholder="Apecron"></Input>
            </Col>
            {/* <Col xs="12" className="mt-3">
            <span className="create-token__sub">Pool Creation free: 1 BNB</span>
          </Col> */}

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Currency</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>{currencySelected}</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>BUSD</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>USDT</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mb-3 mt-1">
                <Label check>
                  <Input type="radio" name="radio1" /> <span>USDC</span>
                </Label>
              </FormGroup>

              <span className="create-token__sub-label">
                Users will pay with {currencySelected} for your token
              </span>
            </Col>

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Free options</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>3% {currencySelected} raised only</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />{" "}
                  <span>2% {currencySelected} raised + 3% tokens</span>
                </Label>
              </FormGroup>
            </Col>

            <Col xs="12" className="mt-3">
              <Label className="create-token__label">Free options</Label>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />
                  <span>Auto Listening</span>
                </Label>
              </FormGroup>
              <FormGroup check className="mt-1">
                <Label check>
                  <Input type="radio" name="radio1" />{" "}
                  <span>Manual Listening</span>
                </Label>
              </FormGroup>
            </Col>

            <Col
              xs="12"
              className="  mt-3 create-token__bottom d-flex justify-content-center align-items-center p-3 p-md-5 my-5"
            >
              <span>
                For auto listing, after you finalize the pool your token will be
                auto listed on DEX.
              </span>
            </Col>

            <Col
              xs="12"
              className=" d-flex justify-content-center align-items-center p-3 mb-5"
            >
              <Button
                onClick={() => setCurrentStep(0)}
                className="custome-btn-lg"
              >
                Finish
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
