'use client';
import { PayrollSupervisor } from '@/types/supervisors.types';
import { slugify } from '@/utils/slugify';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  Tooltip,
  Link,
  Chip,
} from '@heroui/react';
import { useMemo } from 'react';
import { IoCash } from 'react-icons/io5';
import MarkSupervisorPaidModal from './MarkSupervisorPaidModal';

interface PayrollSupervisorOverviewProps {
  onOpenChange: () => void;
  isOpen: boolean;
  selectedSupervisor: PayrollSupervisor | null;
}

const PayrollSupervisorOverview = ({
  isOpen,
  onOpenChange,
  selectedSupervisor,
}: PayrollSupervisorOverviewProps) => {
  const fName = selectedSupervisor?.supervisor.email.split('.')[0];
  const lName = selectedSupervisor?.supervisor.email
    .split('.')[1]
    .split('@')[0];

  const active_days = selectedSupervisor ? selectedSupervisor.active_days : 0;
  const today = new Date();
  const dueDateCalculation = useMemo(() => {
    // 1. Check if the counter has passed the 30-day mark
    if (active_days > 30) {
      // 2. Subtract 30 from current counter to find overdue days
      const overdueDays = active_days - 30;

      return `${overdueDays} days overdue!`;
    } else if (active_days === 30) {
      return `Action required!`;
    } else {
      return `${30 - active_days} ${30 - active_days > 1 ? 'days' : 'day'} remaining.`;
    }
  }, [selectedSupervisor?.active_days]);
  return (
    <>
      <Drawer
        hideCloseButton
        backdrop="opaque"
        classNames={{
          base: 'sm:data-[placement=right]:m-2 sm:data-[placement=left]:m-2  rounded-medium',
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <div className="flex justify-end w-full">
                  <Tooltip content="Close">
                    <Button
                      isIconOnly
                      className="text-default-400"
                      size="sm"
                      variant="light"
                      onPress={onClose}
                    >
                      <svg
                        fill="none"
                        height="20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                      </svg>
                    </Button>
                  </Tooltip>
                </div>
              </DrawerHeader>
              <DrawerBody className="pt-16">
                <div className="flex flex-col gap-2 py-4">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold capitalize leading-7">
                      {fName} {lName}
                    </h1>
                    {selectedSupervisor?.isActive ? (
                      <Chip color="success" variant="flat">
                        <div className="flex items-center gap-1">
                          <div className="bg-green-600 h-1.5 w-1.5 rounded-full"></div>{' '}
                          <span className="text-xs font-semibold">Active</span>
                        </div>
                      </Chip>
                    ) : (
                      <Chip color="default" variant="flat">
                        <div className="flex items-center gap-1">
                          <div className="bg-gray-600 h-1.5 w-1.5 rounded-full"></div>{' '}
                          <span className="text-xs font-semibold">
                            Inactive
                          </span>
                        </div>
                      </Chip>
                    )}
                  </div>
                  <p className="text-sm text-default-500">
                    {selectedSupervisor?.supervisor.email}
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                        <div className="text-tiny bg-default-100 py-0.5 text-default-500">
                          {today.toLocaleDateString('en-US', {
                            month: 'short',
                            timeZone: 'UTC',
                          })}
                        </div>
                        <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                          {today.getUTCDate()}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-medium text-foreground font-medium">
                          <div>
                            {selectedSupervisor?.paymentTomorrow && (
                              <span className="text-warning">
                                Due: {dueDateCalculation}
                              </span>
                            )}
                            {selectedSupervisor?.paymentDue && (
                              <span className="text-gray-500">
                                Due: {dueDateCalculation}
                              </span>
                            )}
                            {selectedSupervisor?.paymentOverDue && (
                              <span className="text-danger">
                                Overdue: {dueDateCalculation}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-small text-default-500">
                          {selectedSupervisor?.active_days} active days
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                        <svg
                          className="text-default-500"
                          height="20"
                          viewBox="0 0 16 16"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                            <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={
                            <svg
                              className="group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                          }
                          className="group gap-x-0.5 text-medium text-foreground font-medium"
                          href={`/dashboard/operations/${slugify(selectedSupervisor?.project?.client || '')}-${selectedSupervisor?.project?._id}`}
                          rel="noreferrer noopener"
                        >
                          {selectedSupervisor?.project?.name}
                        </Link>
                        <p className="text-small text-default-500">
                          {selectedSupervisor?.project?.location.state}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-medium font-medium">
                        Project Description
                      </span>
                      <div className="text-medium text-default-500 flex flex-col gap-2">
                        <p>{selectedSupervisor?.project?.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      {selectedSupervisor &&
                        selectedSupervisor?.active_days >= 30 && (
                          <MarkSupervisorPaidModal
                            selectedSupervisor={selectedSupervisor}
                            onOpenChangeDrawer={onOpenChange}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default PayrollSupervisorOverview;
