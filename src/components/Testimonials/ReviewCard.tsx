import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import strings from '../../themes/strings';
import images from '../../themes/images';

import * as classes from './Testimonials.module.scss';

const ReviewCard = () => {
  return (
    <div className={classes.reviewsCard}>
      <div className={classes.cardTriangle}></div>
      <Container className={classes.textWrapper}>
        <p className={classes.reviewName}>
          {strings.testimonials.reviewCard.name}
        </p>

        <Row>
          <Col className={classes.stars}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </Col>
        </Row>
        <img
          src={images.icons.bitcoin}
          className={classes.icons}
          alt="bitcoin"
        />
        <p className={classes.reviewTitle}>
          {strings.testimonials.reviewCard.title}
        </p>
        <p className={classes.reviewComment}>
          {strings.testimonials.reviewCard.comment}
        </p>
      </Container>
    </div>
  );
};

export default ReviewCard;
