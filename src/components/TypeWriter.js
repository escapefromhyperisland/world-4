import React from 'react';
import Typewriter from 'typewriter-effect';
import { DelayAngeloImg } from './DelayAngeloImg';

export const TypeWriter = () => {
  return (
    <div className="typewriter">
      <Typewriter
        onInit={typewriter => {
          typewriter
            .typeString(
              'Angelo comes from Italy and every time he travels, he orders his favorite dish: pasta carbonara.'
              //'Angelo'
            )

            .pauseFor(2000)
            .deleteAll()
            .changeDeleteSpeed(0.01)
            .typeString(
              'One of his biggest nightmares is to order a carbonara and recieve an awful version of it.'
              //'One of...'
            )
            .start()
            .pauseFor(2000)
            .deleteAll()
            .changeDeleteSpeed(0.1)
            .typeString(
              'Help Angelo to choose the right ingredients in order to stop this nightmare.'
              //'Help Angelo'
            )
            .pauseFor(90000)
            .deleteAll()
            .changeDeleteSpeed(0.1)
            .typeString(
              'Angelo says that it might be a hidden ingredient somewhere...'
            );
        }}
      />
      <DelayAngeloImg />
    </div>
  );
};
