import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Buttons from '../Buttons/Buttons';
import HorizontalLine from '../Dividers/HorizontalLine';
import Heading from '../Headings/Heading';

import strings from '../../themes/strings';

import * as classes from './Paragraphs.module.scss';

const Paragraphs = (props: any) => {
  return (
    <Container className={classes.paragraphWrapper}>
      <Row>
        <Col>
          <img src={props.img} alt={props.alt} className={props.imgStyle} />
        </Col>
        <Col>
          <Heading headingTitle={props.heading} />
          <HorizontalLine />
          <p className={props.paragraphStyle}>{props.paragraph}</p>
          <Buttons
            url={props.url}
            btnClass={props.btnStyle}
            btnName={props.btnName}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Paragraphs;
