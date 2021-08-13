import React from 'react';

import Buttons from '../Buttons/Buttons';
import HorizontalLine from '../Dividers/HorizontalLine';
import Heading from '../Headings/Heading';

import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Dividers/HorizontalLine.module.scss';
import * as classes from './Paragraphs.module.scss';
import HeadingAndDescription from '../HeadingAndDescription/HeadingAndDescription';

const Paragraph = (props: any) => {
  return (
    <div>
      <div className={classes.paragraphWrapper}>
        <div className={props.paragraphClass}>
          <div className={classes.imgCol}>
            <img src={props.img} alt={props.alt} className={props.imgStyle} />
          </div>

          <div className={props.descriptionStyle}>
            <HeadingAndDescription
              headingClass={headingStyle.gradientHeading}
              headingTitle={props.heading}
              lineClass={lineClass.line}
            />

            <p className={props.paragraphStyle}>{props.paragraph}</p>
            <Buttons
              url={props.url}
              btnClass={props.btnStyle}
              btnName={props.btnName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
