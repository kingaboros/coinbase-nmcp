import React from 'react';

const Heading = (props: any) => {
  return (
    <div>
      <h2 className={props.headingStyle}>{props.headingTitle}</h2>
    </div>
  );
};

export default Heading;
