import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../Headings/Heading';
import Button from '../Buttons/Buttons';

import strings from '../../themes/strings';

import * as classes from './BlogSection.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as btnStyle from '../Buttons/Buttons.module.scss';

const BlogCard = (props: any) => {
  return (
    <div className={classes.blogCardSection}>
      <Container>
        <div className={classes.gradientBorder}>
          <div>
            <p className={classes.date}>{strings.blogSection.date}</p>
            <Heading
              headingStyle={headingStyle.blogHeading}
              headingTitle={strings.blogSection.postHeading}
            />
            <p className={classes.blogExcerp}>
              {strings.blogSection.postExcerp}
            </p>
            <Button
              btnClass={btnStyle.blogSectionBtn}
              url="blog-post-url"
              btnName={strings.blogSection.button}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogCard;
