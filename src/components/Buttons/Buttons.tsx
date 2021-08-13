import React from 'react';
import { Button } from 'react-bootstrap';

const Buttons = (props: any) => {
  return (
    <Button type="submit" className={props.btnClass} href={props.url}>
      {props.btnName}
    </Button>
  );
};

export default Buttons;
