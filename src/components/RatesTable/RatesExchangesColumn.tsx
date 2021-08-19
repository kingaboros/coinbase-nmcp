import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../Headings/Heading';
import Buttons from '../Buttons/Buttons';

import strings from '../../themes/strings';

import * as btnStyle from '../Buttons/Buttons.module.scss';
import * as classes from './RatesTable.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';

const RatesExchangesColumn = () => {
  return (
    <Container>
      <Row>
        <Col className={classes.ratesColumns}>
          <div className={classes.ratesHeaderRow}>
            <Heading
              headingTitle={strings.ratesTable.ratesHeadings.exchanges}
              headingStyle={headingStyle.ratesHeading}
            />
          </div>
          <Buttons
            btnClass={btnStyle.ratesBtn}
            btnName={strings.buttons.ratesBtn}
          />
          <div className={classes.scrollBar}>
            <table>
              <tbody>
                <tr>
                  <td className={classes.tableText}>
                    {strings.ratesTable.exchangeColumn.btcFull}
                  </td>
                  <td className={classes.exchangeIcons}>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </td>
                  <td className={classes.tableTextExhange}>
                    {strings.ratesTable.exchangeColumn.bt}
                  </td>
                </tr>
                <tr>
                  <td className={classes.tableTextExhange}>
                    <strong>
                      {strings.ratesTable.exchangeColumn.btcPrice}
                    </strong>
                  </td>
                  <td className={classes.tableTextExhange}>
                    {strings.ratesTable.coins.btc}
                  </td>
                  <td className={classes.exchangeIcons}>
                    <i className="fas fa-exchange-alt"></i>
                  </td>
                  <td className={classes.tableTextExhange}>
                    <strong>
                      {strings.ratesTable.exchangeColumn.ngnPrice}
                    </strong>
                  </td>
                  <td className={classes.tableTextExhange}>
                    {strings.ratesTable.coins.ngn}
                  </td>
                </tr>
                <hr className={classes.columnDivider} />
                <tr>
                  <td className={classes.tableTextExhange}>
                    {strings.ratesTable.exchangeColumn.amazonCard}
                  </td>
                  <td className={classes.exchangeIcons}>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </td>
                  <td className={classes.tableTextExhange}>
                    {strings.ratesTable.exchangeColumn.bt}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RatesExchangesColumn;
