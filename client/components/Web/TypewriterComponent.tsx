'use client';
import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import { title } from '../primitives';
import clsx from 'clsx';

const TypewriterComponent = () => {
  const [text] = useTypewriter({
    words: [
      'Interior Design',
      'Smart Home',
      'Architecture',
      'Rennovation',
      'residential',
      'Commercial',
      '3D Visualization',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      {' '}
      <h1 className="text-4xl font-bold text-center">
        {' '}
        <span
          className={clsx(
            title({
              tone: 'gradientOrange',
              fontWeight: 'extrabold',
            }),
            'capitalize'
          )}
        >
          {text}
        </span>
        <Cursor cursorStyle="|" />
      </h1>
    </div>
  );
};

export default TypewriterComponent;
