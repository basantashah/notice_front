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
<<<<<<< HEAD
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import './index.css'
=======
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import Cookies from 'universal-cookie';
  import './index.css'
>>>>>>> master
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.logOut = this.logOut.bind(this);
  }

<<<<<<< HEAD
  logOut() {
    const cookies = new Cookies();
    cookies.remove('loggedIn', true, { path: '/' })
=======
  logOut(){
    const cookies = new Cookies();
    cookies.remove('loggedIn',true,{path:'/'})
>>>>>>> master
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
<<<<<<< HEAD


    return (
      <div>
        <Navbar color="light" light expand="md" style={{ fontSize: '18px' }}>
=======
    

    return (
      <div>
        <Navbar color="light" light expand="md" style={{fontSize:'18px'}}>
>>>>>>> master
          <NavbarBrand href="/home">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto float-right" navbar  >
<<<<<<< HEAD
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
=======
            <NavItem >
              {/* <Link to="/noticeboard">Browse notice</Link> */}
                <NavLink href="/mynotice" style={{color:'#000'}}>my notice</NavLink>
              </NavItem>
              <NavItem >
              {/* <Link to="/noticeboard">Browse notice</Link> */}
                <NavLink href="/noticeboard" style={{color:'#000'}}>Browse notice</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{color:'#000'}}>
>>>>>>> master
                  Notice
                </DropdownToggle>
                <DropdownMenu right >
                  <DropdownItem >
<<<<<<< HEAD
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





=======
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
              </UncontrolledDropdown>
              <NavItem onClick={this.logOut}>
                <NavLink href="/" style={{color:'#000'}}>log out </NavLink>
              </NavItem>
>>>>>>> master
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}