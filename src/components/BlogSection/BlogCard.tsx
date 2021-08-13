import React from 'react';
import { Container } from 'react-bootstrap';

import Heading from '../Headings/Heading';
import Button from '../Buttons/Buttons';

import * as classes from './BlogSection.module.scss';

const BlogCard = (props: any) => {
  return (
    <div className={props.stateStyle}>
      <Container>
        <div className={props.borderStyle}>
          <div>
            <p className={classes.date}>{props.date}</p>
            <Heading
              headingStyle={props.headingColor}
              headingTitle={props.postTitle}
            />
            <p className={props.excerpStyle}>{props.postExcerp}</p>
            <Button
              btnClass={props.btnStyle}
              url={props.url}
              btnName={props.btnName}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogCard;
