import React from 'react';

import HeadingAndDescription from '../Headings/HeadingAndDescription';
import FormComp from './FormComp';

import strings from '../../themes/strings';

import * as classes from './NewsletterSection.module.scss';
import * as downloadClasses from '../DownloadSection/DownloadSection.module.scss';

import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Features/HorizontalLine/HorizontalLine.module.scss';

const NewsletterSection = () => {
  return (
    <div className={classes.newsletterWrapper}>
      <HeadingAndDescription
        headingClass={headingStyle.tradeHeading}
        headingTitle={strings.headings.newsletter}
        lineClass={lineClass.lineCenter}
        descriptionClass={downloadClasses.paragraph}
        description={strings.descriptions.newsletterSection}
      />
      <FormComp />
    </div>
  );
};

export default NewsletterSection;
