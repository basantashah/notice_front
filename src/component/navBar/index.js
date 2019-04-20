import React from 'react';
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
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import Cookies from 'universal-cookie';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.logOut = this.logOut.bind(this);
  }

  logOut(){
    const cookies = new Cookies();
    cookies.remove('loggedIn',true,{path:'/'})
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              {/* <Link to="/noticeboard">Browse notice</Link> */}
                <NavLink href="/noticeboard">Browse notice</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Notice
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/notice">  Post new notice</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/notice">  Update notice</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/notice">  Delete notice</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem onClick={this.logOut}>
                <NavLink href="/">log out </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}