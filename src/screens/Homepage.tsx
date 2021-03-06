import React from 'react';
import Header from '../components/Header/Header';
import Paragraphs from '../components/Paragraphs/Paragraphs';
import RatesTable from '../components/RatesTable/RatesTable';
import BlogSection from '../components/BlogSection/BlogSection';
import Trade from '../components/Trade/Trade';
import Testimonials from '../components/Testimonials/Testimonials';
import DownloadSection from '../components/DownloadSection/DownloadSection';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';

import * as btnStyle from '../components/Buttons/Buttons.module.scss';
import * as paragraphStyle from '../components/Paragraphs/Paragraphs.module.scss';
import * as headingStyle from '../components/Headings/Heading.module.scss';

import strings from '../themes/strings';
import images from '../themes/images';

const Homepage = (props: any) => {
  return (
    <div>
      <Header />
      <Paragraphs
        paragraphClass={paragraphStyle.row}
        img={images.people}
        imgStyle={paragraphStyle.img}
        alt="people waving"
        descriptionStyle={paragraphStyle.paragraph}
        heading={strings.headings.welcome}
        headingStyle={headingStyle.gradientHeading}
        paragraph={strings.paragraphs.homeWelcome}
        paragraphStyle={paragraphStyle.paragraph}
        url="discover"
        btnStyle={btnStyle.navBtn}
        btnName={strings.buttons.homeParagraph}
      />
      <RatesTable />
      <Paragraphs
        paragraphClass={paragraphStyle.paragraphReverse}
        img={images.home.stars}
        imgStyle={paragraphStyle.imgRight}
        descriptionStyle={paragraphStyle.paragraphTextReverse}
        alt="person with laptop"
        heading={strings.headings.experience}
        headingStyle={headingStyle.reverseParagraphHeading}
        paragraph={strings.paragraphs.homeExperience}
        paragraphStyle={paragraphStyle.paragraphReverse}
        url="discover"
        btnStyle={btnStyle.navBtn}
        btnName={strings.buttons.homeParagraph}
      />
      <Trade />
      <BlogSection />
      <Testimonials />
      <DownloadSection />
      <NewsletterSection />
    </div>
  );
};

export default Homepage;
