import React from 'react';

import Buttons from '../Buttons/Buttons';
import HorizontalLine from '../Dividers/HorizontalLine';
import Heading from '../Headings/Heading';

import * as classes from './Paragraphs.module.scss';

const Paragraph = (props: any) => {
  return (
    <div className={classes.paragraphWrapper}>
      <div className={props.paragraphClass}>
        <div className={classes.imgCol}>
          <img src={props.img} alt={props.alt} className={props.imgStyle} />
        </div>

        <div className={props.descriptionStyle}>
          <Heading headingTitle={props.heading} />
          <HorizontalLine />
          <p className={props.paragraphStyle}>{props.paragraph}</p>
          <Buttons
            url={props.url}
            btnClass={props.btnStyle}
            btnName={props.btnName}
          />
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
