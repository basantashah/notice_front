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
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import './index.css'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    const cookies = new Cookies();
    cookies.remove('loggedIn', true, { path: '/' })
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {


    return (
      <div>
        <Navbar color="light" light expand="md" style={{ fontSize: '18px' }}>
          <NavbarBrand href="/noticeboard">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto float-right" navbar  >
              <NavItem >
                {/* <Link to="/noticeboard">Browse notice</Link> */}
                <NavLink href="/mynotice" style={{ color: '#000' }}>My Notices</NavLink>
              </NavItem>
              <NavItem >
                {/* <Link to="/noticeboard">Browse notice</Link> */}
                <NavLink href="/noticeboard" style={{ color: '#000' }}>Browse Notices</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{ color: '#000' }}>
                  Notice
                </DropdownToggle>
                <DropdownMenu right >
                  <DropdownItem >
                    <NavLink href="/notice" style={{ color: '#000', fontSize: '18px' }}>  Post new notice</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/notice" style={{ color: '#000', fontSize: '18px' }}>  Generat Logs(Future)</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/notice" style={{ color: '#000', fontSize: '18px' }}>  Send SMS(Future)</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{ color: '#000' }}>
                  Logout
                </DropdownToggle>
                <DropdownMenu right >
                  <DropdownItem >
                    <NavItem onClick={this.logOut}>
                      <NavLink href="/" style={{ color: '#000' }}>Logout </NavLink></NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/notice" style={{ color: '#000', fontSize: '18px' }}>  Change Password</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>





            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}