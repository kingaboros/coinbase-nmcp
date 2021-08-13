import React from 'react';
import Buttons from '../Buttons/Buttons';

import strings from '../../themes/strings';

import * as classes from './NewsletterSection.module.scss';
import * as btnStyle from '../Buttons/Buttons.module.scss';

const FormComp = () => {
  return (
    <div className={classes.formWrapper}>
      <form className={classes.formField}>
        <div className={classes.inputWrapper}>
          <input type="text" className={classes.input} placeholder="email" />
        </div>

        <Buttons
          url="discover"
          btnClass={btnStyle.newsletterBtn}
          btnName={strings.buttons.homeParagraph}
        />
      </form>
    </div>
  );
};

export default FormComp;
