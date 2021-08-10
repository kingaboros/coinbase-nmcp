import React from 'react';
import { Container } from 'react-bootstrap';

import * as classes from './BlogSection.module.scss';

const BlogCard = (props: any) => {
  return (
    <div className={classes.blogCardSection}>
      <Container>
        <div className={classes.gradientBorder}>Hello</div>
      </Container>
    </div>
  );
};

export default BlogCard;
