import React from 'react';
import Waves from '../Dividers/Waves';

import images from '../../themes/images';

import * as classes from './DownloadSection.module.scss';
import * as wavesClass from '../Dividers/Waves.module.scss';

const AppImages = () => {
  return (
    <div className={classes.screensBackground}>
      <Waves wavesStyle={wavesClass.ratesWavesTop} />
      <div className={classes.appScreens}>
        <img src={images.appScreens.screen1} alt="phone" />
        <img
          className={classes.appScreen}
          src={images.appScreens.screen2}
          alt="phone"
        />
      </div>
      <img
        className={classes.graphic}
        src={images.appScreens.graphic}
        alt="graphic"
      />
    </div>
  );
};

export default AppImages;
