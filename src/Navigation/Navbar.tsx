import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import Buttons from '../components/Buttons/Buttons';
import strings from '../themes/strings';
import images from '../themes/images';

import * as navStyle from './Navbar.module.scss';
import * as btnStyle from '../components/Buttons/Buttons.module.scss';

const NavBar = () => {
  return (
    <Navbar className={navStyle.navbarWrapper} expand="md" collapseOnSelect>
      <Navbar.Brand href="/" className={navStyle.logo}>
        <img src={images.logo} alt="coinbase logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className={navStyle.navbar} id="basic-navbar-nav">
        <Nav className={navStyle.navLinks}>
          <Nav.Link className={navStyle.navLinkItem} href="/">
            {strings.navbar.home}
          </Nav.Link>
          <Nav.Link className={navStyle.navLinkItem} href="about">
            {strings.navbar.about}
          </Nav.Link>
          <Nav.Link className={navStyle.navLinkItem} href="blog">
            {strings.navbar.blog}
          </Nav.Link>
          <Nav.Link className={navStyle.navLinkItem} href="contact">
            {strings.navbar.contact}
          </Nav.Link>
          <NavDropdown
            className={navStyle.navLinkItem}
            title={strings.navbar.dropdownTitle}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className={navStyle.dropdownItem} href="bitcoin">
              {strings.navbar.dropdown1}
            </NavDropdown.Item>
            <NavDropdown.Item className={navStyle.dropdownItem} href="giftcard">
              {strings.navbar.dropdown2}
            </NavDropdown.Item>
          </NavDropdown>
          <Buttons
            url="login"
            btnClass={btnStyle.navBtn}
            btnName={strings.buttons.navbarBtn}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
