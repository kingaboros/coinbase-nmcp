import React from 'react';

import strings from '../themes/strings';

import * as classes from './FooterSection.module.scss';

const ContactColumn = () => {
  return (
    <div className={classes.contactTextWrapper}>
      <p className={classes.contactText}>{strings.footer.phoneNo}</p>
      <p className={classes.contactText}>{strings.footer.email}</p>
      <p className={classes.contactText}>{strings.footer.address}</p>
      <div className={classes.linkDiv}>
        <a className={classes.downloadLink} href="download">
          {strings.footer.download}
        </a>
      </div>
    </div>
  );
};

export default ContactColumn;