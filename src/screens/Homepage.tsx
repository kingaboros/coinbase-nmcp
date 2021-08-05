import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../components/Header/Header';

import Paragraphs from '../components/Paragraphs/Paragraphs';
import RatesTable from '../components/RatesTable/RatesTable';

import * as btnStyle from '../components/Buttons/Buttons.module.scss';

import * as paragraphStyle from '../components/Paragraphs/Paragraphs.module.scss';

import strings from '../themes/strings';
import images from '../themes/images';

const Homepage = (props: any) => {
  return (
    <div>
      <Navbar />
      <Header />
      <Paragraphs
        paragraphClass={paragraphStyle.row}
        img={images.people}
        imgStyle={paragraphStyle.img}
        alt="people waving"
        descriptionStyle={paragraphStyle.paragraph}
        heading={strings.headings.welcome}
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
        imgStyle={paragraphStyle.img}
        descriptionStyle={paragraphStyle.paragraphTextReverse}
        alt="person with laptop"
        heading={strings.headings.experience}
        paragraph={strings.paragraphs.homeExperience}
        paragraphStyle={paragraphStyle.paragraphReverse}
        url="discover"
        btnStyle={btnStyle.navBtn}
        btnName={strings.buttons.homeParagraph}
      />
    </div>
  );
};

export default Homepage;
