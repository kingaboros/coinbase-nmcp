import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HeadingAndDescription from '../Headings/HeadingAndDescription';
import BlogCard from './BlogCard';

import * as classes from './BlogSection.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Features/HorizontalLine/HorizontalLine.module.scss';
import * as btnStyle from '../Buttons/Buttons.module.scss';

import strings from '../../themes/strings';

const BlogSection = () => {
  return (
    <Container className={classes.blogCardSection}>
      <HeadingAndDescription
        headingClass={headingStyle.tradeHeading}
        headingTitle={strings.headings.blog}
        lineClass={lineClass.lineCenter}
        descriptionClass={classes.blogSectionDescription}
        description={strings.descriptions.blogSection}
      />

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
        <Col className={classes.blogCardColumn}>
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
