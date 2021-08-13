import React from 'react';
import { Row, Col } from 'react-bootstrap';

import strings from '../themes/strings';
import images from '../themes/images';
import icons from '../themes/icons';

import * as classes from './FooterSection.module.scss';

const LogoColumn = () => {
  return (
    <div>
      <Row>
        <Col className={classes.logoColumn}>
          <img
            className={classes.footerLogo}
            src={images.footerLogo}
            alt="logo"
          />
          <p className={classes.paragraph}>{strings.footer.description}</p>
          <div className={classes.socialIcons}>
            <i className={classes.icons}>{icons.google}</i>
            <i className={classes.icons}>{icons.facebook}</i>
            <i className={classes.icons}>{icons.twitter}</i>
            <i className={classes.icons}>{icons.instagram}</i>
          </div>
          <p className={classes.coder}>{strings.footer.coder}</p>
        </Col>
      </Row>
    </div>
  );
};

export default LogoColumn;
