import React from 'react';
import ReviewCard from './ReviewCard';

import * as classes from './Testimonials.module.scss';

const Circles = (props: any) => {
  return (
    <div className={classes.circles} onMouseEnter={props.onMouseEnter}></div>
  );
};

export default Circles;
