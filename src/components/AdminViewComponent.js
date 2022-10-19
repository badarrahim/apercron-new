import { css } from '@emotion/react';
import React from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux';
import { DotLoader } from "react-spinners";
import { Col, Row } from 'reactstrap';
import PresaleCard from './PresaleCard';

const AdminView = () => {
    const { launchPadsData, launchDataLoading } = useSelector(
        (state) => state?.web3Slice
      );

      const override = css`
      display: block;
      margin: 100 auto;
      border-color: red;
    `;

    return ( 
        <div>
             <LoadingOverlay
            active={launchDataLoading}
            spinner={<DotLoader color={"#ffffff"} css={override} size={50} />}
            // text="Loading LaunchPad Tokens"
          >
            <h1 className='pending_launches'>Pending Launches</h1>
            <Row className="mt-5">
              {launchPadsData &&
                launchPadsData
                    .filter(item=>!item?.isApproved)
                    .map((launchpad) => {
                    return (
                      <>
                        <Col lg="6" className="mt-3 mt-lg-0">
                          <PresaleCard launchpad={launchpad} isAdmin={true} />
                        </Col>
                      </>
                    );
                  })}
              {/* <Col lg="6" className="mt-3 mt-lg-0">
              <PresaleCard />
            </Col> */}
            </Row>
          </LoadingOverlay>
        </div>
     );
}
 
export default AdminView;