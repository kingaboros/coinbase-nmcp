import React from 'react';
import { Container } from 'react-bootstrap';
import HeadingAndDescription from '../Headings/HeadingAndDescription';

import strings from '../../themes/strings';
import images from '../../themes/images';
import AppImages from './AppImages';

import * as classes from './DownloadSection.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Features/HorizontalLine/HorizontalLine.module.scss';

const DownloadSection = () => {
  return (
    <div className={classes.background}>
      <Container>
        <HeadingAndDescription
          headingClass={headingStyle.tradeHeading}
          headingTitle={strings.headings.download}
          lineClass={lineClass.lineCenter}
          descriptionClass={classes.paragraph}
          description={strings.descriptions.downloadAppSection}
        />

        <div className={classes.appLogos}>
          <img src={images.appLogos.appStore} alt="app store logo" />
          <img src={images.appLogos.googlePlay} alt="google play logo" />
        </div>
      </Container>
      <AppImages />
    </div>
  );
};

export default DownloadSection;
