import React from 'react';
import { Row, Col } from 'react-bootstrap';

import strings from '../themes/strings';

import * as classes from './FooterSection.module.scss';

const ContactColumn = () => {
  return (
    <div className={classes.contactTextWrapper}>
      <Row>
        <Col>
          <p className={classes.contactText}>{strings.footer.phoneNo}</p>
          <p className={classes.contactText}>{strings.footer.email}</p>
          <p className={classes.contactText}>{strings.footer.address}</p>
          <div className={classes.linkDiv}>
            <a className={classes.downloadLink} href="download">
              {strings.footer.download}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactColumn;
