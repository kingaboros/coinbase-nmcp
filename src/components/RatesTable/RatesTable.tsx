import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import RatesHeader from './RatesHeader';
import RatesColumn from './RatesColumn';
import RatesReservesColumn from './RatesReservesColumn';
import RatesExchangesColumn from './RatesExchangesColumn';

import WavesBottom from '../Features/Waves/WavesBottom';
import Waves from '../Features/Waves/Waves';

import * as classes from './RatesTable.module.scss';
import * as wavesClass from '../Features/Waves/Waves.module.scss';

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
