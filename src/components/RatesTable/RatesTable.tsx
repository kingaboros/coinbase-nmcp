import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import RatesHeader from './RatesHeader';
import WavesBottom from '../Dividers/WavesBottom';

import Waves from '../Dividers/Waves';
import RatesColumn from './RatesColumn';
import RatesReservesColumn from './RatesReservesColumn';
import RatesExchangesColumn from './RatesExchangesColumn';

import * as classes from './RatesTable.module.scss';
import * as wavesClass from '../Dividers/Waves.module.scss';

const RatesTable = () => {
  return (
    <div className={classes.ratesTableContainer}>
      <Waves wavesStyle={wavesClass.ratesWavesTop} />
      <Container>
        <Card className={classes.ratesCard}>
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
      <WavesBottom wavesStyle={wavesClass.ratesBottom} />
    </div>
  );
};

export default RatesTable;
