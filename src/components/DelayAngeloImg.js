import React, { useState, useEffect } from 'react';
import AngeloImg from '../images/angelo.png';

import styled from '@emotion/styled';

import { GridImages } from './GridImages';

const DisplayBlock = styled.img`
  /* display: flex; */
  /* float: left; */
  width: 29%;
  margin-top: 0.5em;
`;

export const DelayAngeloImg = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 60000);
  }, []);

  return (
    <div>
      {showImage && <DisplayBlock src={AngeloImg} alt="angelo" />}
      {showImage && <GridImages alt="ingredients" />}
    </div>
  );
};
