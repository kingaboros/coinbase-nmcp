import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../Headings/Heading';

import strings from '../../themes/strings';

import * as classes from './RatesTable.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';

const RatesReservesColumn = () => {
  return (
    <Container>
      <Row>
        <Col className={classes.ratesColumns}>
          <div className={classes.ratesHeaderRow}>
            <Heading
              headingTitle={strings.ratesTable.ratesHeadings.reserves}
              headingStyle={headingStyle.ratesHeading}
            />
          </div>
          <div className={classes.reservesColumnSingle}>
            <table>
              <tbody>
                <tr>
                  <td className={classes.tableIcons}>
                    <i className="fas fa-university"></i>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.reservesColumn.bt}
                  </td>
                  <td className={classes.tableTextRight}>
                    <strong>
                      {strings.ratesTable.reservesColumn.ngnPrice}
                    </strong>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.reservesColumn.ngn}
                  </td>
                </tr>
                <tr>
                  <td className={classes.tableIcons}>
                    <i className="fab fa-bitcoin"></i>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.reservesColumn.btc}
                  </td>

                  <td className={classes.tableTextRight}>
                    <strong>
                      {strings.ratesTable.reservesColumn.btcPrice}
                    </strong>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.coins.btc}
                  </td>
                </tr>
                <tr>
                  <td className={classes.tableIcons}>
                    <i className="fab fa-ethereum"></i>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.reservesColumn.eth}
                  </td>
                  <td className={classes.tableTextRight}>
                    <strong>
                      {strings.ratesTable.reservesColumn.ethPrice}
                    </strong>
                  </td>
                  <td className={classes.tableText}>
                    {strings.ratesTable.coins.eth}
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

export default RatesReservesColumn;
