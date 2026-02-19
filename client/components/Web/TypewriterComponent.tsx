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
      'Commercial Spaces',
      '3D Visualization',
    ],
    loop: true,
    delaySpeed: 5000,
  });
  return (
    <div>
      {' '}
      <h1 className="text-4xl font-bold text-center">
        We specialize in{' '}
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
