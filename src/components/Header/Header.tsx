import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Buttons from '../Buttons/Buttons';
import WavesBottom from '../Features/Waves/WavesBottom';

import strings from '../../themes/strings';
import images from '../../themes/images';

import * as classes from './Header.module.scss';
import * as btnStyle from '../Buttons/Buttons.module.scss';
import * as wavesClass from '../Features/Waves/Waves.module.scss';

const Header = () => {
  return (
    <Container className={classes.headerWrapper}>
      <Row>
        <Col className={classes.paragraphWrapper}>
          <h2 className={classes.heading}>
            {strings.headings.header}
            <span className={classes.headingBold}>
              {strings.headings.headerBold}
            </span>
          </h2>
          <p className={classes.description}>
            {strings.descriptions.homeHeader}
          </p>
          <Buttons
            url="start"
            btnClass={btnStyle.headerButton}
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
      <WavesBottom wavesStyle={wavesClass.wavesBottom} />
    </Container>
  );
};

export default Header;
