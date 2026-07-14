'use client';
import {
  CheckCircleIcon,
  Cog8ToothIcon,
  PencilSquareIcon,
  PlayPauseIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const OurProcess = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(241, 150, 69)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(241, 150, 69)' }}
        date="Project discovery"
        iconStyle={{ background: 'rgb(241, 150, 69)', color: '#fff' }}
        icon={<StarIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle text-gray-300 font-extrabold">
          Step 1
        </h4>
        <h3 className="vertical-timeline-element-title font-bold text-white">
          DESIGN
        </h3>
        <p className="text-white">
          We understand the client&apos;s vision and requirements. Then Develop
          a detailed design concept that aligns with the client&apos;s aesthetic
          preferences and functional needs.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'transparent' }}
        date="Planning and development"
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<WrenchScrewdriverIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle text-gray-300 font-extrabold">
          Step 2
        </h4>
        <h3 className="vertical-timeline-element-title font-bold">DEVELOP</h3>
        <p className="dark:text-white">
          Finalise design details and prepare for implementation. Coordinate
          with contractors and suppliers to ensure the project runs smoothly.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#000' }}
        date="Review and updates"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<PencilSquareIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle text-gray-400 font-bold">
          Step 3
        </h4>
        <h3 className="vertical-timeline-element-title font-bold text-white">
          REVISION
        </h3>
        <p className="text-white">
          Address any changes or adjustments required during the implementation
          phase.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(64, 168, 101)' }}
        date="Project completion"
        iconStyle={{ background: 'rgb(64, 168, 101)', color: '#fff' }}
        icon={<CheckCircleIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle text-gray-300 font-extrabold">
          Step 4
        </h4>
        <h3 className="vertical-timeline-element-title font-bold">
          PROJECT DELIVERY
        </h3>
        <p className="dark:text-white">
          Ensure the final outcome meets the client’s expectations and design
          specifications.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'transparent' }}
        iconStyle={{ background: '#993300', color: '#fff' }}
        date="Maintenance (Optional)"
        icon={<Cog8ToothIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle text-gray-300 font-extrabold">
          Step 5
        </h4>
        <h3 className="vertical-timeline-element-title font-bold">
          MAINTENANCE
        </h3>
        <p>
          Ensure the space remains functional and aesthetically pleasing over
          time. Provide ongoing support and updates as needed.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default OurProcess;
