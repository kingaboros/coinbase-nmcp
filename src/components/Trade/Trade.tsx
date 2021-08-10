import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

import Heading from '../Headings/Heading';
import HorizontalLine from '../Dividers/HorizontalLine';
import TradeCard from './TradeCard';
import WavesBottom from '../Dividers/WavesBottom';

import strings from '../../themes/strings';
import images from '../../themes/images';

import * as classes from './Trade.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Dividers/HorizontalLine.module.scss';
import * as wavesClass from '../Dividers/Waves.module.scss';

const Trade = () => {
  return (
    <div className={classes.tradeBackground}>
      <Container>
        <Card className={classes.tradeContainer}>
          <div>
            <Heading
              headingStyle={headingStyle.tradeHeading}
              headingTitle={strings.headings.trade}
            />
            <HorizontalLine lineStyle={lineClass.lineCenter} />
          </div>

          <Row>
            <Col>
              <TradeCard
                img={images.icons.bitcoin}
                title={strings.trade.btc}
                iconStyle={classes.btcIcon}
              />
            </Col>
            <Col>
              <TradeCard
                img={images.icons.giftCard}
                title={strings.trade.card}
                iconStyle={classes.cardIcon}
              />
            </Col>
          </Row>
        </Card>
      </Container>
      <WavesBottom wavesStyle={wavesClass.tradeBottom} />
    </div>
  );
};

export default Trade;
