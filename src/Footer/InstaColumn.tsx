import React from 'react';
import { Row, Col } from 'react-bootstrap';

import images from '../themes/images';

import * as classes from './FooterSection.module.scss';

const InstaColumn = () => {
  return (
    <div>
      <Row>
        <Col>
          <img className={classes.square} src={images.footer} alt="logo" />
          <img className={classes.square} src={images.footer} alt="logo" />
          <img className={classes.square} src={images.footer} alt="logo" />
          <img className={classes.square} src={images.footer} alt="logo" />
        </Col>
      </Row>
    </div>
  );
};

export default InstaColumn;
