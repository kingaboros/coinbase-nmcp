import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import RatesHeader from './RatesHeader';

import RatesColumn from './RatesColumn';
import RatesReservesColumn from './RatesReservesColumn';
import RatesExchangesColumn from './RatesExchangesColumn';

import * as classes from './RatesTable.module.scss';

const RatesCard = () => {
  return (
    <Container className={classes.ratesCard}>
      <Card>
        <Card.Header className={classes.ratesHeaderRow}>
          <RatesHeader />
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <RatesColumn />
            </Col>
            <Col>
              <RatesReservesColumn />
            </Col>
            <Col>
              <RatesExchangesColumn />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RatesCard;
