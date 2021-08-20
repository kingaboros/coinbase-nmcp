import React from 'react';
import { Container } from 'react-bootstrap';
import HeadingAndDescription from '../Headings/HeadingAndDescription';
import ReviewCard from './ReviewCard';

import Waves from '../Features/Waves/Waves';
import WavesBottom from '../Features/Waves/WavesBottom';
import Circles from '../Features/Circles/Circles';

import strings from '../../themes/strings';
import images from '../../themes/images';

import * as classes from './Testimonials.module.scss';
import * as wavesClass from '../Features/Waves/Waves.module.scss';
import * as headingStyle from '../Headings/Heading.module.scss';
import * as lineClass from '../Features/HorizontalLine/HorizontalLine.module.scss';

const Testimonials = () => {
  return (
    <div className={classes.background}>
      <Waves wavesStyle={wavesClass.ratesWavesTop} />
      <Container>
        <HeadingAndDescription
          headingClass={headingStyle.testimonialHeading}
          headingTitle={strings.testimonials.heading}
          lineClass={lineClass.lineCenter}
          descriptionClass={classes.description}
          description={strings.testimonials.paragraph}
        />
      </Container>
      <img
        className={classes.graphic1}
        src={images.testimonialGraphics.graphic1}
        alt="graphic"
      />
      <img
        className={classes.graphic2}
        src={images.testimonialGraphics.graphic2}
        alt="graphic"
      />
      <ReviewCard />
      <Circles />
      <WavesBottom wavesStyle={wavesClass.testimonialsBottom} />
    </div>
  );
};

export default Testimonials;
