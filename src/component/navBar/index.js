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
        <Navbar color="light" light expand="md" style={{fontSize:'18px'}}>
          <NavbarBrand href="/mynotice">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto float-right" navbar  >
            {/* <NavItem >
                <NavLink href="/mynotice" style={{color:'#000'}}>my notice</NavLink>
              </NavItem> */}
              <NavItem >
              {/* <Link to="/noticeboard">Browse notice</Link> */}
                <NavLink href="/noticeboard" style={{color:'#000'}}>Browse notice</NavLink>
              </NavItem>
              <NavItem >
              {/* <Link to="/noticeboard">Browse notice</Link> */}
                <NavLink href="/notice" style={{color:'#000'}}>Post notice</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{color:'#000'}}>
                  Notice
                </DropdownToggle>
                <DropdownMenu right >
                  <DropdownItem >
                  <NavLink href="/notice" style={{color:'#000',fontSize:'18px'}}>  Post new notice</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/notice" style={{color:'#000',fontSize:'18px'}}>  Update notice</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/notice" style={{color:'#000',fontSize:'18px'}}>  Delete notice</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem onClick={this.logOut}>
                <NavLink href="/" style={{color:'#000'}}>log out </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}