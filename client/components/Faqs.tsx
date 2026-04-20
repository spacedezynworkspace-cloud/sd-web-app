'use client';
import { Accordion, AccordionItem } from '@heroui/react';
import React from 'react';
import SectionHeader from './Web/SectionHeader';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Faqs = () => {
  const FAQS = [
    {
      key: 0,
      title: 'How long does an interior design project take?',
      question: 'Want a clearer timeline?',
      content: (
        <div className="flex text-sm flex-col gap-4">
          <p>
            Most projects take between 4–12 weeks, depending on the size, scope,
            and level of customization. Smaller spaces or consultations may be
            completed faster.
          </p>
          <p className="flex sm:flex-row flex-col sm:items-center gap-1">
            {' '}
            To get a personalized estimate,
            <a href="/" className="text-[#F19645] flex items-center gap-1">
              <span> Start project</span>
              <ArrowRightIcon className="size-4" />
            </a>{' '}
          </p>
        </div>
      ),
    },
    {
      key: 1,
      title: 'How much does your interior design service cost?',
      question:
        'Tell us your budget and we’ll tailor a plan that works for you.',
      content: (
        <div className="flex text-sm flex-col gap-4">
          <p>
            Our pricing depends on the scope of your project, including design
            complexity, materials, and execution. We offer:
          </p>
          <ul className="list-disc list-inside">
            <li>Fixed design packages</li>
            <li> Custom project-based pricing</li>
          </ul>
          <a href="/" className="text-[#F19645] flex items-center gap-1">
            <span> Start project</span>
            <ArrowRightIcon className="size-4" />
          </a>{' '}
        </div>
      ),
    },
    {
      key: 2,
      title: 'Do you have a minimum project budget?',
      question: 'Our basic package on our packages plan is flexible.',
      content: (
        <div className="flex text-sm flex-col gap-4">
          <p>
            To ensure we deliver the best quality and results, most of our
            projects build require . If you’re unsure, feel free to reach out—
            we can guide you on the best approach based on your budget and
            goals.
          </p>
          {/* <a href="/" className="text-[#F19645] flex items-center gap-1">
            <span> See packages</span>
            <ArrowRightIcon className="size-4" />
          </a> */}
        </div>
      ),
    },
    {
      key: 3,
      title: 'Do you offer alternative design options?',
      question: 'We share 3D designs and moodboards',
      content: (
        <div className="flex text-sm flex-col gap-4">
          <p>
            Yes. We typically present multiple concepts or variations, so you
            can choose what best fits your style and budget.
          </p>
        </div>
      ),
    },
    {
      key: 4,
      title: 'Do you offer consultation-only services?',
      question: 'Give us a call or visit our store front',
      content: (
        <div className="flex text-sm flex-col gap-4">
          <p>
            Yes, we offer design consultations if you just need expert guidance
            without full project execution.
          </p>
        </div>
      ),
    },
    {
      key: 5,
      title: 'What is your design process?',
      question: 'Let’s walk you through it step-by-step.',
      content: (
        <div className="flex text-sm flex-col gap-4">
          <p>Our process is simple and collaborative:</p>
          <ul className="list-disc list-inside">
            <li> Discovery & consultation</li>
            <li> Concept development</li>
            <li> Design presentation</li>
            <li>Implementation & styling</li>
          </ul>
        </div>
      ),
    },
    {
      key: 6,
      title: 'How do I get started?',
      question: 'Click the "Start project" button ',
      content: (
        <div className="flex text-sm items-start flex-col gap-4">
          <p>
            Simply click the button below and fill out a short form. We’ll
            review your needs and get in touch with the next steps.
          </p>
          <a
            href="/"
            className="bg-[#F19645] rounded-md shadow px-3 py-2 text-xs text-white font-semibold w-auto flex items-center gap-1"
          >
            <span> Start project</span>
            <ArrowRightIcon className="size-4" />
          </a>{' '}
        </div>
      ),
    },
  ];

  return (
    <div className="sm:max-w-7xl w-full px-4 sm:px-6 sm:gap-20 items-start flex sm:flex-row flex-col justify-start lg:px-8 mx-auto">
      <div className="text-black  sm:mb-0 py-10">
        <SectionHeader
          introText="got questions?"
          headerText="FAQS"
          paragraphText="Our community is dedicated to listening to your questions and providing tailored solutions to new community members and clients that become part of our great interior design journey."
        />
      </div>
      <Accordion defaultExpandedKeys={['0']}>
        {FAQS.map((faq, key) => {
          return (
            <AccordionItem
              key={key}
              aria-label={faq.title}
              subtitle={<span className="text-gray-800">{faq.question}</span>}
              title={<h2 className="text-black font-semibold">{faq.title}</h2>}
            >
              <span className="text-black">{faq.content}</span>
            </AccordionItem>
          );
        })}
        {/* <AccordionItem
          key="1"
          aria-label="Accordion 1"
          subtitle={
            <span className="text-gray-300">
              Press to expand <strong>key 2</strong>
            </span>
          }
          title={<h2 className="text-white">Accordion 1</h2>}
        >
          {defaultContent}
        </AccordionItem> */}
        {/* <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle={
            <span className="text-gray-300">
              Press to expand <strong>key 2</strong>
            </span>
          }
          title="Accordion 2"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          subtitle={
            <span className="text-gray-300">
              Press to expand <strong>key 2</strong>
            </span>
          }
          title="Accordion 3"
        >
          {defaultContent}
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default Faqs;
