import React from 'react';
import Buttons from '../Buttons/Buttons';
import { Container, Row, Col } from 'react-bootstrap';
import Waves from '../Dividers/Waves';

import * as classes from './Header.module.scss';
import * as btnStyle from '../Buttons/Buttons.module.scss';

import strings from '../../themes/strings';
import images from '../../themes/images';

const Header = () => {
  return (
    <Container className={classes.headerWrapper}>
      <Row>
        <Col className={classes.paragraphWrapper}>
          <h2 className={classes.heading}>
            {strings.headings.home}
            <span className={classes.headingBold}>
              {strings.headings.homeBold}
            </span>
          </h2>
          <p>{strings.descriptions.homeHeader}</p>
          <Buttons
            url="start"
            btnClass={btnStyle.headerBtn}
            btnName={strings.buttons.homeHeader}
          />
        </Col>
        <Col>
          <img
            className={classes.img}
            src={images.home.header}
            alt="bitcoin graphic"
          />
        </Col>
      </Row>
      <Waves />
    </Container>
  );
};

export default Header;
