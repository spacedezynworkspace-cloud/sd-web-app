import { ExpenseFundsRequestType } from '@/types';
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { User } from '@heroui/react';
import exp from 'constants';
import React from 'react';

interface SupervisorFundsRequestProps {
  onOpen: () => void;
  expense: ExpenseFundsRequestType;
  setSelectedRequest: (value: ExpenseFundsRequestType) => void;
}

const SupervisorFundsRequest = (props: SupervisorFundsRequestProps) => {
  return (
    <button
      onClick={() => {
        props.setSelectedRequest(props.expense);
        props.onOpen();
      }}
      className={`rounded-lg p-4 bg-white shadow w-full dark:border-orange-400 flex items-center justify-between hover:bg-orange-200/70 transition-colors`}
    >
      {/* $
      {props.expense.requestDetails.status === 'declined'
        ? 'border-none bg-red-200'
        : props.expense.requestDetails.status === 'pending'
          ? 'bg-amber-200'
          : 'bg-green-100'}{' '} */}
      <User
        avatarProps={{
          src: props.expense.avatar,
        }}
        description={
          <p className={`${props.expense.opened ? '' : 'text-black'}`}>
            {props.expense.role}
          </p>
        }
        name={<div className="truncate w-1/2">{props.expense.name}</div>}
        className={`${props.expense.opened ? '' : 'text-black'} `}
      />
      <span className="text-xs dark:text-black capitalize flex items-center gap-2">
        <span>₦{props.expense.requestDetails.amount.toLocaleString()}</span>{' '}
        {props.expense.requestDetails.status === 'declined' ? (
          <XCircleIcon className="size-4 text-red-400" />
        ) : props.expense.requestDetails.status === 'approved' ? (
          <CheckCircleIcon className="size-4 text-green-400" />
        ) : (
          <ClockIcon className="size-4 text-amber-400" />
        )}
      </span>
    </button>
  );
};

export default SupervisorFundsRequest;
