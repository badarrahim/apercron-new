import React from "react";
import { useState } from "react";
import logo from "../assets/img/main-logo.png";
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <Navbar color="light" expand="md">
        <NavbarBrand href="/">
          <img src={logo} />
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
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Launchpadlist</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                <Button className="custome-btn">
                  <i className="fa fa-plus mr-2"></i> Create
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                <Button className="custome-btn">Connect</Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
