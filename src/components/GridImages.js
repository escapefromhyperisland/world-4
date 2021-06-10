import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import styled from '@emotion/styled';
import Switch from '../components/Switch';

import eggs from '../images/eggs.jpg';
import garlic from '../images/garlic.jpeg';
import guanciale from '../images/guanciale.jpg';
import onion from '../images/onion.jpeg';
import parmigiano from '../images/parmigiano.jpg';
import pecorino from '../images/pecorino-romano.jpg';
import salt from '../images/salt&pepper.jpg';
import spagetti from '../images/Spagetti.jpg';
import cream from '../images/cream.jpg';

// ********* Styled Components **********

const WrapFlex = styled.div`
  float: right;
  margin-right: 15rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 400px;
`;

const GridImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  ${({ active }) =>
    active &&
    'border-top: 2px solid #cc0000; border-right: 2px solid #cc0000; border-left: 2px solid #cc0000; border-bottom: 2px solid #cc0000;'}
  ${({ isOn, image }) => !isOn && image === 'parmigiano' && 'display: none;'}
`;
// I'm passing the props 'isOn' and 'image' from the Switch component to the styled component
// If Switch is on then add display: none to parmigiano

// ********* Styled Components **********

// I create a copy of the array to make it easier to reset once the answer is not correct

const initialState = [
  { id: 1, src: eggs, title: 'eggs', active: false },
  { id: 2, src: garlic, title: 'garlic', active: false },
  { id: 3, src: guanciale, title: 'guanciale', active: false },
  { id: 4, src: onion, title: 'onion', active: false },
  { id: 5, src: parmigiano, title: 'parmigiano', active: false },
  { id: 6, src: pecorino, title: 'pecorino', active: false },
  { id: 7, src: salt, title: 'salt', active: false },
  { id: 8, src: spagetti, title: 'spagetti', active: false },
  { id: 9, src: cream, title: 'cream', active: false }
];

export const GridImages = () => {
  const [images, setImages] = useState([
    { id: 1, src: eggs, title: 'eggs', active: false },
    { id: 2, src: garlic, title: 'garlic', active: false },
    { id: 3, src: guanciale, title: 'guanciale', active: false },
    { id: 4, src: onion, title: 'onion', active: false },
    { id: 5, src: parmigiano, title: 'parmigiano', active: false },
    { id: 6, src: pecorino, title: 'pecorino', active: false },
    { id: 7, src: salt, title: 'salt', active: false },
    { id: 8, src: spagetti, title: 'spagetti', active: false },
    { id: 9, src: cream, title: 'cream', active: false }
  ]);

  const [emptyArr, setEmptyArr] = useState([]);

  // const [correctAnswer, setCorrectAnswer] = useState(false);

  //useState for toggle button
  const [getParmesan, setGetParmesan] = useState(false);

  // useState to pass to challenge 2
  const [passToChallenge2, setPassToChallenge2] = useState(false);

  const correctArr = [
    'eggs',
    'guanciale',
    'parmigiano',
    'pecorino',
    'salt',
    'spagetti'
  ];

  // Adds the clicked ingredients to the emtpyArr array
  const handleOnClick = (ingredient, idx) => {
    if (images[idx].active) {
      setEmptyArr(emptyArr.filter(e => e !== images[idx].title));
    } else {
      setEmptyArr(prevState => Array.from(new Set([...prevState, ingredient]))); //new Set prevents to add again same value, but converts it to an object, that's why array.from
    }
    // Here I'm targeting the object images, implementing a switch to the property active and setting
    const activeImage = images;
    activeImage[idx].active = !activeImage[idx].active;
    setImages(activeImage);

    // If the the property active is false, then filter it from the array emtpyArr
  };

  console.log(emptyArr);

  // We need to stringify the array in order to make it work. Even if it's sorted, it'll not take as equal
  useEffect(
    idx => {
      if (
        JSON.stringify(emptyArr.sort()) === JSON.stringify(correctArr.sort())
      ) {
        alert('Grazie Mille!! This Carbonara is like la mia mamma!');
        setEmptyArr([]);
        setPassToChallenge2(true);
      }

      if (emptyArr.length > 6) {
        alert('This is not a carbonara like la mia mamma!!');
        setEmptyArr([]);
        setImages(initialState);
      }
    },
    [emptyArr]
  );

  if (passToChallenge2) {
    return <Redirect to="./Angelo2" />;
  }

  return (
    <WrapFlex>
      <Switch
        isOn={getParmesan}
        handleToggle={() => setGetParmesan(!getParmesan)}
      />
      <GridContainer>
        {images.map((img, idx) => {
          return (
            <GridImg
              active={img.active}
              isOn={getParmesan}
              image={img.title}
              onClick={() => handleOnClick(img.title, idx)}
              src={img.src}
              key={img.id}
              title={img.title}
            />
          );
        })}
      </GridContainer>
    </WrapFlex>
  );
};
