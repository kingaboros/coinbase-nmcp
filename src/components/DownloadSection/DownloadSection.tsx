import React from 'react';
import { Container } from 'react-bootstrap';

import Heading from '../Headings/Heading';
import HorizontalLine from '../Dividers/HorizontalLine';

import strings from '../../themes/strings';
import images from '../../themes/images';

import * as classes from './DownloadSection.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Dividers/HorizontalLine.module.scss';

const DownloadSection = () => {
  return (
    <div className={classes.background}>
      <Container>
        <Heading
          headingStyle={headingStyle.tradeHeading}
          headingTitle={strings.headings.download}
        />
        <HorizontalLine lineStyle={lineClass.lineCenter} />
        <p className={classes.paragraph}>
          {strings.descriptions.downloadAppSection}
        </p>
        <div className={classes.appLogos}>
          <img src={images.appLogos.appStore} />
          <img src={images.appLogos.googlePlay} />
        </div>
      </Container>
    </div>
  );
};

export default DownloadSection;
