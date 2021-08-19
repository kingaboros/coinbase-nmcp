import React from 'react';

import * as navStyle from './Navbar.module.scss';

const FooterNav = () => {
  return (
    <div>
      <nav className={navStyle.footerNav}>
        <a className={navStyle.footerNavLink} href="/">
          Home
        </a>
        <a className={navStyle.footerNavLink} href="about">
          About Us
        </a>
        <a className={navStyle.footerNavLink} href="blog">
          Blog
        </a>
        <a className={navStyle.footerNavLink} href="sell">
          Sell
        </a>
        <a className={navStyle.footerNavLink} href="contact">
          Contact Us
        </a>
      </nav>
    </div>
  );
};

export default FooterNav;
