'use client';
import React from 'react';
import CountUp from 'react-countup';
const Statistics = () => {
  return (
    <section className="w-full relative px-4 sm:py-20 py-10 sm:px-6 items-center flex justify-center flex-col lg:px-8 mx-auto bg-white dark:bg-black">
      <div className="text-black dark:text-white">
        <div className="w-full max-w-7xl flex sm:flex-row flex-col items-center justify-center gap-10">
          <div className="text-center">
            <CountUp
              end={480}
              duration={5}
              className="text-4xl font-bold"
              suffix="+"
            />
            <p className="text-sm">Projects Completed</p>
          </div>
          <div className="text-center">
            <CountUp
              end={215}
              duration={5}
              className="text-4xl font-bold"
              suffix="+"
            />
            <p className="text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <CountUp
              end={73}
              duration={5}
              className="text-4xl font-bold"
              suffix="+"
            />
            <p className="text-sm">Supervisors</p>
          </div>
          <div className="text-center">
            <CountUp
              end={10}
              duration={5}
              className="text-4xl font-bold"
              suffix="+"
            />
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
