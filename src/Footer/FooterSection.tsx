import React from 'react';
import { Row, Col } from 'react-bootstrap';

import LogoColumn from './LogoColumn';
import FooterNav from '../Navbar/FooterNav';

import strings from '../themes/strings';

import * as classes from './FooterSection.module.scss';
import ContactColumn from './ContactColumn';
import InstaColumn from './InstaColumn';

const FooterSection = () => {
  return (
    <div className={classes.footerWrapper}>
      <Row>
        <Col className={classes.logoColumn}>
          <LogoColumn />
        </Col>
        <Col>
          <h4 className={classes.footerHeading}>{strings.footer.footerNav}</h4>
          <FooterNav />
        </Col>
        <Col className={classes.instaColumn}>
          <h4 className={classes.footerHeading}>{strings.footer.contact}</h4>
          <ContactColumn />
        </Col>
        <Col className={classes.instaColumn}>
          <h4 className={classes.footerHeading}>{strings.footer.instagram}</h4>
          <InstaColumn />
          <InstaColumn />
        </Col>
      </Row>
    </div>
  );
};

export default FooterSection;
