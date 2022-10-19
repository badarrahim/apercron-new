import React, { useState } from "react";
import Web3 from 'web3';
import bigNumber from 'big-number';
// import { Stepper } from "react-form-stepper";
import moment from "moment";
import { Steps } from "antd";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { configEnv } from "../utils/configEnv";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentContractSelected } from "../store/web3-slice";
import { addTokenToLaunchPad, getTotalLaunchPads, verifyTokenAddress } from "../utils/web3-helpers";
import { TokenABI } from "../utils/abi/TokenABI";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useEffect } from "react";
const pinatabBearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzYzIxOWRmNi1kNzNiLTQwOTUtODY2Ni1iZDE4ZTYxZGQ4Y2EiLCJlbWFpbCI6Im11c3RhZmFidXR0MzEyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5N2Q1M2Y3MTQ4YmE2ODQxZGRlYyIsInNjb3BlZEtleVNlY3JldCI6IjhhYzJjMzI5ZGVjM2M4MzBkZTg1MTU2MjkyYmIyNTdhODk0ZDlmYjIxOWI0MzllYzZhYzk2YWUzMjczZGIzNmEiLCJpYXQiOjE2NjQwMTUyODJ9.BF5MYxvyJeCHijaF9ocXRc7RW_19-mrW-qXWDzLq0q4';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    color: "#ffffff",
    background: "none",
    borderRadius: "10px",
    border: "1px solid rgba(198, 198, 198, 0.6) !important",
    marginLeft: "0px !important",
    marginRight: "0px !important",
    padding: "0px !important",

    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
}));

const { Step } = Steps;

const CreateToken = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { selectedChainID, userAddress } = useSelector(state => state?.web3Slice);
  const [tokenAddress, setTokenAddress] = useState("");
  const [currencySelected, setCurrencySelected] = useState(configEnv?.[selectedChainID]?.currency);
  const [isContractValid, setContractValid] = useState(false);

  const [presaleRate, setPresaleRate] = useState(0);
  const [totalTokenForSale, setTotalTokenForSale] = useState(0);
  const [softcap, setSoftcap] = useState(0);
  const [hardcap, setHardcap] = useState(0);
  const [isRefund, setIsRefund] = useState(true);
  const [isFairLaunch, setIsFairLaunch] = useState(false);
  const [startTime, setStartTime] = useState(0);
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
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenDecimals, setTokenDecimals] = useState(0);
  const [minBuy, setMinBuy] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [liquidityPercentage,setLiquidityPercentage] = useState(1);
  const dispatch = useDispatch();

  const clearFields = () => {
    setTokenAddress("");
    setContractValid(false);

    setPresaleRate(0);
    setTotalTokenForSale(0);
    setSoftcap(0);
    setHardcap(0);
    setMinBuy(0);
    setMaxBuy(0);
    setIsRefund(true);
    setIsFairLaunch(false);
    setStartTime(0);
    setEndTime(0);
    setLogoUrl('');
    setWebsite('');
    setFacebook('');
    setTwitter('');
    setGithub('');
    setTelegram('');
    setInstagram('');
    setDiscord('');
    setReddit('');
    setYoutube('');
    setDescription('');
    setUri('');
    setTokenName('');
    setTokenSymbol('');
    setTokenDecimals(0);
    // document.getElementById("start-time").value = "";
    // document.getElementById("end-time").value = "";

  };

  const addLaunchPadToken = async (obj) => {
    try {
      const tempWeb3 = new Web3(Web3.givenProvider);
      const improvedWeb3 = new Web3(configEnv[selectedChainID]?.rpc);
      let launchPadContract = currencySelected == 'USDT' ? configEnv[selectedChainID]?.ApercronLaunchpadUSDT : configEnv[selectedChainID]?.ApercronLaunchpadEth;
      const address = userAddress;

      if (!address) {
        alert('Please connect wallet address');
        return;
      }

      const contract = new tempWeb3.eth.Contract(launchPadContract.abi, launchPadContract.contractAddress);
      console.log(contract);
      const contractApprove = new tempWeb3.eth.Contract(TokenABI, tokenAddress);
      let transferToken = bigNumber(totalTokenForSale).multiply(
        bigNumber(String(10 ** 18))
      );
      ;
      obj['tokenPerEth'] = obj['tokenPerEth'].toString();
      obj['totalTokenForSale'] = Web3.utils.toWei(obj['totalTokenForSale'].toString(), 'ether');
      obj['liquidityPercentage'] = liquidityPercentage;
      obj['softcap'] = Web3.utils.toWei(obj['softcap'].toString(), 'ether');
      obj['hardcap'] = Web3.utils.toWei(obj['hardcap'].toString(), 'ether');
      ;
      obj['minBuy'] = Web3.utils.toWei(obj['minBuy'].toString(), 'ether');
      obj['maxBuy'] = Web3.utils.toWei(obj['maxBuy'].toString(), 'ether');
      obj['liquidityPercentage'] = liquidityPercentage;
      console.log({ obj });
      ;
      await contractApprove.methods.approve(launchPadContract.contractAddress, transferToken).send({ from: address })
        .on('receipt', async (result) => {
          console.log(result);
          await contract.methods.addTokenToLaunchpad(obj).send({ from: address })
            .on('receipt', function (response) {
              console.log("received", response);
              clearFields();
              setCurrentStep(0);
              getTotalLaunchPads();

            }).on('error', err => {
              console.log('error', err);
              clearFields();
              setCurrentStep(0);

            });
        });
    } catch (err) {
      console.log(err);
      setCurrentStep(0);
      // return { success: false };
    }

  };

  useEffect(() => {
    if (currencySelected != 'USDT') {
      setCurrencySelected(configEnv?.[selectedChainID]?.currency);
    }
  }, [selectedChainID]);

  const classes = useStyles();
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
          <Form onSubmit={e => {
            e.preventDefault();
            if (isContractValid && userAddress) {
              setCurrentStep(1);
              // dispatch(addTokenToLaunchPad(obj, currencySelected));
            } else {
              if (!userAddress) alert("Please Connect Wallet");
              else alert("Token is invalid");

            }

          }}>
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
                {/* <Button className="custome-btn">Create Token</Button> */}
              </Col>
              <Col xs="12" className="mt-3">
                <Input placeholder="Apecron" required value={tokenAddress} onChange={async (e) => {
                  setTokenAddress(e?.target?.value);
                  const res = await verifyTokenAddress(e?.target?.value);
                  setContractValid(res?.success);
                  setTokenName(res.tokenName);
                  setTokenSymbol(res.tokenSymbol);
                  setTokenDecimals(res.tokenDecimals);

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
                    <Input type="radio" name="radio1" value={configEnv?.[selectedChainID]?.currency} checked={currencySelected == configEnv?.[selectedChainID]?.currency} onClick={() => {
                      setCurrencySelected(configEnv?.[selectedChainID]?.currency);
                      dispatch(setCurrentContractSelected('ApercronLaunchpadEth'));
                    }} />
                    <span>{configEnv?.[selectedChainID]?.currency}</span>
                  </Label>
                </FormGroup>
                <FormGroup check className="mt-1">
                  <Label check>
                    <Input type="radio" name="radio1" value='USDT' checked={currencySelected == 'USDT'} onClick={() => {
                      setCurrencySelected('USDT');
                      dispatch(setCurrentContractSelected('ApercronLaunchpadUSDT'));
                    }} /> <span>USDT</span>
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
                    <Input type="radio" name="radio2" checked />{" "}
                    <span>2% {currencySelected} raised + 3% tokens for distribution</span>
                  </Label>
                </FormGroup>
              </Col>

              <Col
                xs="12"
                className=" d-flex justify-content-center align-items-center p-3 mb-5"
              >
                <Button
                  type='submit'
                  // onClick={() => {
                  //   if (!tokenAddress || !isContractValid) {
                  //     return;
                  //   }
                  //   setCurrentStep(1);
                  // }}
                  className="custome-btn-lg"
                >
                  Next
                </Button>
              </Col>
            </Row></Form>
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
              <Col xs="12">
                <FormGroup check inline>
                  <Input type="checkbox" checked={isFairLaunch} onChange={e => setIsFairLaunch(e.target.checked)} />
                  <Label check className="ml-3">
                    Is Fair Launch?
                  </Label>
                </FormGroup>
              </Col>
              <Col md="12" className="mt-2">
                <FormGroup>
                  <Label className="create-token__label">Presale rate*</Label>
                  <Input placeholder="0" type='number' required min={1} value={presaleRate} onChange={(e) => setPresaleRate(e.target.value)} />
                  <p className="mb-0 create-token__danger">
                    Presale rate must be positive number
                  </p>
                  <span className="create-token__primary">
                    If 1 spend 1 {currencySelected} how many tokens i will receive?
                  </span>
                </FormGroup>
              </Col>
              <Col md="12" className="mt-2">
                <FormGroup>
                  <Label className="create-token__label">Total Token For Sale *</Label>
                  <Input placeholder="0" type='number' required min={1} value={totalTokenForSale} onChange={(e) => setTotalTokenForSale(e.target.value)} />
                  {/* <p className="mb-0 create-token__danger">
                    Presale rate must be positive number
                  </p>
                  <span className="create-token__primary">
                    If 1 spend 1 {currencySelected} how many tokens i will receive?
                  </span> */}
                </FormGroup>
              </Col>
              <Col md="12" className="mt-2">
                <FormGroup>
                  <Label className="create-token__label">Liquidity Percentage *</Label>
                  <Input placeholder="0" type='number' required min={1} max={100} value={liquidityPercentage} onChange={(e) => setLiquidityPercentage(e.target.value)} />
                  {/* <p className="mb-0 create-token__danger">
                    Presale rate must be positive number
                  </p>
                  <span className="create-token__primary">
                    If 1 spend 1 {currencySelected} how many tokens i will receive?
                  </span> */}
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Softcap ({currencySelected})*</Label>
                  <Input type='number' required value={softcap} onChange={e => setSoftcap(e.target.value)} min={1} />
                  <span className="create-token__primary">
                  Softcap must be >=50% of hardcap
                  </span>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Hardcap ({currencySelected})*</Label>
                  <Input type="number" disabled={isFairLaunch} required={!isFairLaunch} value={hardcap} onChange={e => setHardcap(e.target.value)} min={1} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Minimum Buy ({currencySelected})*</Label>
                  <Input type='number' min={1} required value={minBuy} onChange={e => setMinBuy(e.target.value)} min={1} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Maximum Buy ({currencySelected})*</Label>
                  <Input type="number" required min={minBuy + 1 || 1} value={maxBuy} onChange={e => setMaxBuy(e.target.value)} min={1} />
                </FormGroup>
              </Col>

              {/* <Col md="12">
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
                  <Input type="time" id="start-time" required onChange={e => setStartTime(moment().set("hour", e.target.value.split(':')[0]).set("minute", e.target.value.split(':')[1]).unix())} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">End time (UTC)*</Label>
                  <Input type="time" id="end-time" onChange={e => setEndTime(moment().add(1, 'd').set("hour", e.target.value.split(':')[0]).set("minute", e.target.value.split(':')[1]).unix())} />
                </FormGroup>
              </Col> */}

              <Col md="12">
                <FormGroup>
                  <Label className="create-token__label">Refund type</Label>
                  <Input type="select" onChange={e => setIsRefund(JSON.parse(e.target.value))}>
                    <option default value="true">
                      Refund
                    </option>
                    <option value="false">
                      Burn
                    </option>
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
                  Select start & end (date,time) (UTC)*
                </Label>
              </Col>
              <Col md="6" className="mb-4">
                <Label className="create-token__label">
                  Start date & time (UTC)*
                </Label>
                <br />
                <TextField
                  id="datetime-local"
                  label=""
                  type="datetime-local"
                  // defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  required={true}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      color: "white",
                      border: "none ",
                      padding: 0,
                      margin: 0,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={e => setStartTime(moment(e.target.value).unix())}
                />
                {/* <Input type="time" /> */}
              </Col>
              <Col md="6" className="mb-4">
                <Label className="create-token__label">
                  End date & time (UTC)*
                </Label>
                <br />
                <TextField
                  id="datetime-local"
                  label=""
                  type="datetime-local"
                  // defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      color: "white",
                      border: "none ",
                      padding: 0,
                      margin: 0,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={e => setEndTime(moment(e.target.value).unix())}
                // onChange={(e) => console.log("Change", e.target.value)}
                />
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
              const added1 = await axios.post(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, parsed, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + pinatabBearerToken
                }
              });
              let hasedKey = added1.data.IpfsHash;
              // this.setState({ tokenUri: tokenUri1 });
              setUri(hasedKey);
              setCurrentStep(3);
              /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
              // createSale(url)
            } catch (error) {
              alert('Error uploading file: ', error);
              console.log('Error uploading file: ', error);
              // setCurrentStep(3);
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
                  <Input type='text' required value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} />
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
                  <Input type="text" required value={website} onChange={e => setWebsite(e.target.value)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Facebook</Label>
                  <Input type="text" value={facebook} onChange={e => setFacebook(e.target.value)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Twitter</Label>
                  <Input type="text" value={twitter} onChange={e => setTwitter(e.target.value)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Github</Label>
                  <Input type="text" value={github} onChange={e => setGithub(e.target.value)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Telegram</Label>
                  <Input type="text" value={telegram} onChange={e => setTelegram(e.target.value)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Instagram</Label>
                  <Input type="text" value={instagram} onChange={e => setInstagram(e.target.value)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label className="create-token__label">Discord</Label>
                  <Input type="text" value={discord} onChange={e => setDiscord(e.target.value)} />
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup>
                  <Label className="create-token__label">Reddit</Label>
                  <Input type="text" value={reddit} onChange={e => setReddit(e.target.value)} />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label className="create-token__label">Youtube video</Label>
                  <Input type="text" value={youtube} onChange={e => setYoutube(e.target.value)} />
                  <span className="create-token__primary">
                    input your your youtube URL, or youtube video ID.
                  </span>
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup>
                  <Label className="create-token__label">Description</Label>
                  <Input type="textarea" rows="5" value={description} onChange={e => setDescription(e.target.value)} />
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
              <span className="ml-auto create-token__danger">{totalTokenForSale}</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Factory address</span>
              <div className="ml-auto d-flex align-items-center">
                <span className=" create-token__primary">{tokenAddress}</span>
                <i className="fa fa-copy create-token__danger ml-2"></i>
              </div>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Token Name</span>
              <span className="ml-auto create-token__primary">{tokenName}</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Token symbol</span>
              <span className="ml-auto create-token__primary">{tokenSymbol}</span>
            </Col>

            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Token decimal</span>
              <span className="ml-auto create-token__primary">{tokenDecimals}</span>
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
              <span className="ml-auto create-token__primary">{softcap} {currencySelected}</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Hardcap</span>
              <span className="ml-auto create-token__primary">{hardcap} {currencySelected}</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Unsold tokens</span>
              <span className="ml-auto create-token__primary">Refunded</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Minimum buy</span>
              <span className="ml-auto create-token__primary">{minBuy} {currencySelected}</span>
            </Col>
            <Col xs="12" className="d-flex create-token__border-bottom py-2">
              <span className="mr-auto text-white">Maximum buy</span>
              <span className="ml-auto create-token__primary">{maxBuy} {currencySelected}</span>
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
                onClick={() => {
                  let obj = {
                    endTime: parseInt(endTime),
                    launchTime: parseInt(startTime),
                    tokenAddress,
                    hardcap: parseInt(hardcap),
                    softcap: parseInt(softcap),
                    tokenPerEth: parseInt(presaleRate),
                    totalTokenForSale: parseInt(totalTokenForSale),
                    isFairLaunch,
                    isRefund,
                    minBuy: parseInt(minBuy),
                    maxBuy: parseInt(maxBuy),
                    uri
                  };
                  addLaunchPadToken(obj);

                }}
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
