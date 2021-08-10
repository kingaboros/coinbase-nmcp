import React from 'react';
import { classicNameResolver } from 'typescript';

import * as classes from './HorizontalLine.module.scss';

const HorizontalLine = (props: any) => {
  return <div className={props.lineStyle}></div>;
};

export default HorizontalLine;
