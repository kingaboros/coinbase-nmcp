import React from 'react';
import { Container } from 'react-bootstrap';

import * as classes from './Trade.module.scss';

const TradeCard = (props: any) => {
  return (
    <Container className={classes.cardContainer}>
      <div className={classes.iconsCard}>
        <img src={props.img} className={props.iconStyle} alt="icon" />
        <p className={classes.description}>{props.title}</p>
      </div>
    </Container>
  );
};

export default TradeCard;
