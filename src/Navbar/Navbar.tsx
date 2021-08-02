import React from 'react';
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap';

import strings from '../themes/strings';
import images from '../themes/images';

import * as navStyle from './Navbar.module.scss';

const NavBar = () => {
  return (
    <Navbar className={navStyle.navbarWrapper}>
      <Container>
        <Navbar.Brand href="/" className={navStyle.logo}>
          <img src={images.logo} alt="coinbase logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={navStyle.navbar} id="basic-navbar-nav">
          <Nav className={navStyle.navLinks}>
            <Nav.Link href="/">{strings.navbar.home}</Nav.Link>
            <Nav.Link href="about">{strings.navbar.about}</Nav.Link>
            <Nav.Link href="blog">{strings.navbar.blog}</Nav.Link>
            <Nav.Link href="contact">{strings.navbar.contact}</Nav.Link>
            <NavDropdown
              title={strings.navbar.dropdownTitle}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className={navStyle.dropdown} href="bitcoin">
                {strings.navbar.dropdown1}
              </NavDropdown.Item>
              <NavDropdown.Item className={navStyle.dropdown} href="giftcard">
                {strings.navbar.dropdown2}
              </NavDropdown.Item>
            </NavDropdown>
            <Button href="login" className={navStyle.navBtn}>
              {strings.buttons.navbarBtn}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
