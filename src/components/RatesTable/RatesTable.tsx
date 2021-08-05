import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Heading from '../Headings/Heading';

import strings from '../../themes/strings';
import * as classes from './RatesTable.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';

const RatesCard = () => {
  return (
    <Container>
      <Card className={classes.ratesCard}>
        <Row className={classes.ratesHeaderRow}>
          <Col>
            <Card.Header className={classes.cardHeader}>
              <Heading
                headingTitle={strings.ratesTable.ratesHeadings.rates}
                headingStyle={headingStyle.ratesHeading}
              />
            </Card.Header>
          </Col>
          <Col>
            <Card.Header className={classes.cardHeader}>
              <Heading
                headingTitle={strings.ratesTable.ratesHeadings.reserves}
                headingStyle={headingStyle.ratesHeading}
              />
            </Card.Header>
          </Col>
          <Col>
            <Card.Header className={classes.cardHeader}>
              <Heading
                headingTitle={strings.ratesTable.ratesHeadings.exchanges}
                headingStyle={headingStyle.ratesHeading}
              />
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Row>
      </Card>
    </Container>
  );
};

export default RatesCard;
