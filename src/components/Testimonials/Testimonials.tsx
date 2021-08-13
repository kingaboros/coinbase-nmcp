import React from 'react';
import { Container } from 'react-bootstrap';

import Waves from '../Dividers/Waves';
import Heading from '../Headings/Heading';
import HorizontalLine from '../Dividers/HorizontalLine';

import strings from '../../themes/strings';

import * as classes from './Testimonials.module.scss';
import * as wavesClass from '../Dividers/Waves.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Dividers/HorizontalLine.module.scss';
import WavesBottom from '../Dividers/WavesBottom';
import ReviewCard from './ReviewCard';
import Circles from './Circles';

const Testimonials = () => {
  return (
    <div className={classes.background}>
      <Waves wavesStyle={wavesClass.ratesWavesTop} />
      <Container>
        <Heading
          headingStyle={headingStyle.testimonialHeading}
          headingTitle={strings.testimonials.heading}
        />
        <HorizontalLine lineStyle={lineClass.lineCenter} />
        <p className={classes.description}>{strings.testimonials.paragraph}</p>
      </Container>
      <ReviewCard />
      <Circles />
      <WavesBottom wavesStyle={wavesClass.testimonialsBottom} />
    </div>
  );
};

export default Testimonials;