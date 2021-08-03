import React from 'react';

import * as classes from './Heading.module.scss';

const Heading = (props: any) => {
  return (
    <div>
      <h2 className={classes.gradientHeading}>{props.headingTitle}</h2>
    </div>
  );
};

export default Heading;
