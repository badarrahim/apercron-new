import React from "react";
import { useState } from "react";
import logo from "../assets/img/main-logo.png";
import logoSmall from "../assets/img/logo_sm.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { useSelector } from "react-redux";
import { connectWallet } from "../utils/web3-helpers";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {userAddress} = useSelector(state=>state?.web3Slice);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <Navbar color="light" expand="md">
        <NavbarBrand href="/" className={`mx-auto ${isOpen ? "mt-3" : ""}`}>
          <img src={logo} className="d-none d-md-block" />
          <img src={logoSmall} className="d-block d-md-none" />
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <NavbarToggler onClick={toggle} className="mx-auto">
          {isOpen ? (
            <i
              aria-hidden="true"
              tabindex="0"
              className="far fa-window-close"
            ></i>
          ) : (
            <i class="fa fa-list"></i>
          )}
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`ml-auto ${isOpen ? "mt-2" : ""}`} navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Launchpadlist</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button className="custome-btn">
                  <i className="fa fa-plus mr-2"></i> Create
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button className="custome-btn" onClick={()=>connectWallet()}>{userAddress?userAddress?.replace(userAddress?.slice(5,36),'***'):"Connect"}</Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
