import React from 'react';
import { Button } from 'react-bootstrap';

import * as btnStyle from './Buttons.module.scss';

const Buttons = (props: any) => {
  return (
    <Button type="submit" className={props.btnClass} href={props.url}>
      {props.btnName}
    </Button>
  );
};

export default Buttons;
