import { SupervisorFundsRequestType } from '@/types';
import { User } from '@heroui/react';
import React from 'react';

interface SupervisorFundsRequestProps {
  onOpen: () => void;
  supervisor: SupervisorFundsRequestType;
  setSelectedRequest: (value: SupervisorFundsRequestType) => void;
}

const SupervisorFundsRequest = (props: SupervisorFundsRequestProps) => {
  return (
    <button
      onClick={() => {
        props.setSelectedRequest(props.supervisor);
        props.onOpen();
      }}
      className={`rounded-lg p-4  w-full  ${props.supervisor.opened ? 'border-none bg-gray-100' : 'bg-green-100'} dark:border-orange-400 flex items-center justify-between hover:bg-orange-200/70 transition-colors`}
    >
      {' '}
      <User
        avatarProps={{
          src: props.supervisor.avatar,
        }}
        description={
          <p className={`${props.supervisor.opened ? '' : 'text-black'}`}>
            {props.supervisor.role}
          </p>
        }
        name={props.supervisor.name}
        className={`${props.supervisor.opened ? '' : 'text-black'} `}
      />
      <span className="text-xs">
        {props.supervisor.requestDetails.amount} -{' '}
        {props.supervisor.requestDetails.status}
      </span>
    </button>
  );
};

export default SupervisorFundsRequest;
