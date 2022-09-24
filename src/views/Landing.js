import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import CreateToken from "../components/CreateToken";
import CurrentPresales from "../components/CurrentPresales";
import Ecosystem from "../components/Ecosystem";
import LaunchpadProtocol from "../components/LaunchpadProtocol";
import TokenSales from "../components/TokenSales";
import { getTotalLaunchPads } from "../utils/web3-helpers";

const Landing = (props) => {
  useEffect(() => {
    getTotalLaunchPads();
  })

  return (
    <>
      <div className="main-section">
        <Container>
          <LaunchpadProtocol />
          <TokenSales />
          <Ecosystem />
        </Container>
      </div>
      <div className="bottom-section">
        <Container>
          <CurrentPresales />
        </Container>
      </div>

      <div className="token-section">
        <Container>
          <CreateToken />
        </Container>
      </div>
    </>
  );
};

export default Landing;
