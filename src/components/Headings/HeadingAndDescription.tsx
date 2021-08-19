import React from 'react';

import Heading from '../Headings/Heading';
import HorizontalLine from '../Features/HorizontalLine/HorizontalLine';

const HeadingAndDescription = (props: any) => {
  return (
    <div>
      <Heading
        headingStyle={props.headingClass}
        headingTitle={props.headingTitle}
      />
      <HorizontalLine lineStyle={props.lineClass} />
      <p className={props.descriptionClass}>{props.description}</p>
    </div>
  );
};

export default HeadingAndDescription;
