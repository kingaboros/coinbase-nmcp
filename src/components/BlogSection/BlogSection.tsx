import React from 'react';
import { Container } from 'react-bootstrap';
import BlogCard from './BlogCard';

import * as classes from './BlogSection.module.scss';

const BlogSection = () => {
  return (
    <Container>
      <BlogCard />
    </Container>
  );
};

export default BlogSection;
