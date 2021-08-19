import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../Headings/Heading';
import RatesReservesColumn from './RatesReservesColumn';
import RatesExchangesColumn from './RatesExchangesColumn';
import strings from '../../themes/strings';

import * as headingStyle from '../Headings/Heading.module.scss';
import * as classes from './RatesTable.module.scss';

const RatesHeader = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading
            headingTitle={strings.ratesTable.ratesHeadings.rates}
            headingStyle={headingStyle.ratesHeadingTitle}
          />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default RatesHeader;
