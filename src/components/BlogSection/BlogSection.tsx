import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Heading from '../Headings/Heading';
import HorizontalLine from '../Dividers/HorizontalLine';
import BlogCard from './BlogCard';

import * as classes from './BlogSection.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Dividers/HorizontalLine.module.scss';
import * as btnStyle from '../Buttons/Buttons.module.scss';

import strings from '../../themes/strings';

const BlogSection = () => {
  return (
    <Container className={classes.blogCardSection}>
      <Heading
        headingStyle={headingStyle.tradeHeading}
        headingTitle={strings.headings.blog}
      />
      <HorizontalLine lineStyle={lineClass.lineCenter} />
      <p className={classes.blogSectionDescription}>
        {strings.descriptions.blogSection}
      </p>
      <Row>
        <Col>
          <BlogCard
            stateStyle={classes.notActive}
            borderStyle={classes.greyBorder}
            date={strings.blogSection.date2}
            headingColor={headingStyle.notActiveHeading}
            postTitle={strings.blogSection.postHeading2}
            excerpStyle={classes.notActiveExcerp}
            postExcerp={strings.blogSection.postExcerp}
            btnStyle={btnStyle.notActiveBtn}
            url="blog-post-url"
            btnName={strings.blogSection.button}
          />
        </Col>
        <Col>
          <BlogCard
            stateStyle={classes.notActive}
            borderStyle={classes.greyBorder}
            date={strings.blogSection.date3}
            headingColor={headingStyle.notActiveHeading}
            postTitle={strings.blogSection.postHeading3}
            excerpStyle={classes.notActiveExcerp}
            postExcerp={strings.blogSection.postExcerp}
            btnStyle={btnStyle.notActiveBtn}
            url="blog-post-url"
            btnName={strings.blogSection.button}
          />
        </Col>
        <Col>
          <BlogCard
            stateStyle={classes.active}
            borderStyle={classes.cardBackground}
            date={strings.blogSection.date1}
            headingColor={headingStyle.blogHeading}
            postTitle={strings.blogSection.postHeading1}
            excerpStyle={classes.blogExcerp}
            postExcerp={strings.blogSection.postExcerp}
            btnStyle={btnStyle.blogSectionBtn}
            url="blog-post-url"
            btnName={strings.blogSection.button}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSection;
