import React from 'react';

import HeadingAndDescription from '../Headings/HeadingAndDescription';
import Buttons from '../Buttons/Buttons';

import * as lineClass from '../Features/HorizontalLine/HorizontalLine.module.scss';
import * as classes from './Paragraphs.module.scss';

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
              headingClass={props.headingStyle}
              headingTitle={props.heading}
              lineClass={lineClass.line}
            />

            <div>
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
    </div>
  );
};

export default Paragraph;
