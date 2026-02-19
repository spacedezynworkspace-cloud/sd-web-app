import React from 'react';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { Card, CardBody } from '@heroui/card';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/outline';

const FinanceRecentTransactions = () => {
  return (
    <ScrollShadow className="w-full h-[360px] bg-transparent">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Acme Corp</p>
              <p className="text-xs text-default-500">Invoice Payment</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$1,200.00
            </span>
          </div>
        </CardBody>
      </Card>

      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Emily Davis</p>
              <p className="text-xs text-default-500">Refund Issued</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$50.00
            </span>
          </div>
        </CardBody>
      </Card>

      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Jane Smith</p>
              <p className="text-xs text-default-500">Subscription Renewal</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$99.00
            </span>
          </div>
        </CardBody>
      </Card>

      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-default-500">Payment Received</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$250.00
            </span>
          </div>
        </CardBody>
      </Card>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-default-500">Payment Received</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$250.00
            </span>
          </div>
        </CardBody>
      </Card>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-default-500">Payment Received</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$250.00
            </span>
          </div>
        </CardBody>
      </Card>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-default-500">Payment Received</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$250.00
            </span>
          </div>
        </CardBody>
      </Card>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        {' '}
        <CardBody className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
              <HomeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-default-500">Payment Received</p>
            </div>
            <span className="ml-auto text-sm font-semibold text-red-500">
              -$250.00
            </span>
          </div>
        </CardBody>
      </Card>
    </ScrollShadow>
  );
};

export default FinanceRecentTransactions;
