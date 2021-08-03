import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../components/Header/Header';

import Paragraphs from '../components/Paragraphs/Paragraphs';

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
        img={images.people}
        imgStyle={paragraphStyle.img}
        alt="people waving"
        heading={strings.headings.welcome}
        paragraph={strings.paragraphs.homeWelcome}
        url="discover"
        btnStyle={btnStyle.navBtn}
        btnName={strings.buttons.homeParagraph}
      />
    </div>
  );
};

export default Homepage;
