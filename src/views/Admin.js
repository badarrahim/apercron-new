import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import AdminView from "../components/AdminViewComponent";
import { configEnv } from "../utils/configEnv";

const Admin = () => {
  const history = useHistory();

  const { userAddress } = useSelector((state) => state?.web3Slice);

  useEffect(() => {
    if (userAddress?.toLowerCase() !== configEnv?.ownerAddress?.toLowerCase()) {
      history.push("/");
    }
  }, []);
  return (
    <div className="approve-launches-section">
      <Container>
        <AdminView />
      </Container>
    </div>
  );
};

export default Admin;
