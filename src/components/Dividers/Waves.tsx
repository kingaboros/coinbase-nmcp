import React from 'react';

const WavesTop = (props: any) => {
  return (
    <div className={props.wavesClass}>
      <svg
        viewBox="0 0 1366 200"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#fff"
          d="M 0 28 C 208.2 28 485.8 110 694 110 L 694 110 L 694 0 L 0 0 Z"
          stroke-width="0"
        ></path>
        <path
          fill="#fff"
          d="M 693 110 C 894.9 110 1164.1 10 1366 10 L 1366 10 L 1366 0 L 693 0 Z"
          stroke-width="0"
        ></path>
      </svg>
    </div>
  );
};

export default WavesTop;
