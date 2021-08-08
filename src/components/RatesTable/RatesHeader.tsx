import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../Headings/Heading';

import strings from '../../themes/strings';

import * as classes from './RatesTable.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';

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
        <Col>
          <Heading
            headingTitle={strings.ratesTable.ratesHeadings.reserves}
            headingStyle={headingStyle.ratesHeading}
          />
        </Col>
        <Col>
          <Heading
            headingTitle={strings.ratesTable.ratesHeadings.exchanges}
            headingStyle={headingStyle.ratesHeading}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RatesHeader;
