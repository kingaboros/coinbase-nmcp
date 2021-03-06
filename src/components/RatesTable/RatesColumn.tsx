import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../Headings/Heading';

import strings from '../../themes/strings';

import * as classes from './RatesTable.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';

const RatesColumn = () => {
  return (
    <Container>
      <Row>
        <Col className={classes.ratesColumns}>
          <div className={classes.ratesHeaderRow}>
            <Heading
              headingTitle={strings.ratesTable.ratesHeadings.rates}
              headingStyle={headingStyle.ratesHeadingTitle}
            />
          </div>
          <div className={classes.ratesColumnSingle}>
            <table>
              <tbody>
                <tr>
                  <td className={classes.tableIcons}>
                    <i className="fab fa-bitcoin"></i>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.coins.btc}
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.ratesColumn.btcBuy}
                  </td>
                  <td className={classes.tableText}>
                    <strong>{strings.ratesTable.ratesColumn.btcBuySpan}</strong>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.ratesColumn.btcSell}
                  </td>
                  <td className={classes.tableText}>
                    <strong>
                      {strings.ratesTable.ratesColumn.btcSellSpan}
                    </strong>
                  </td>
                </tr>

                <tr>
                  <td className={classes.tableIcons}>
                    <i className="fab fa-ethereum"></i>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.coins.eth}
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.ratesColumn.ethBuy}
                  </td>
                  <td className={classes.tableText}>
                    <strong>{strings.ratesTable.ratesColumn.ethBuySpan}</strong>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.ratesColumn.ethSell}
                  </td>
                  <td className={classes.tableText}>
                    <strong>
                      {strings.ratesTable.ratesColumn.ethSellSpan}
                    </strong>
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

export default RatesColumn;
