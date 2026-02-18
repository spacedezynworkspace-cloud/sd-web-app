import { User } from '@heroui/user';
import Link from 'next/link';
import React from 'react';

type SupervisorFundsRequest = {
  id: number;
  name: string;
  avatar: string;
  role: string;
  requestDetails: {
    amount: string;
    purpose: string;
    date: string;
    status: string;
  };
  opened: boolean;
};
interface SupervisorFundsRequestProps {
  onOpen: () => void;
  supervisor: SupervisorFundsRequest;
}

const SupervisorFundsRequest = (props: SupervisorFundsRequestProps) => {
  return (
    <button
      onClick={props.onOpen}
      className={`rounded-lg p-4  w-full  ${props.supervisor.opened ? 'border-none bg-gray-100' : 'bg-green-300'} dark:border-orange-400 flex items-center justify-between hover:bg-orange-200/70 transition-colors`}
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
