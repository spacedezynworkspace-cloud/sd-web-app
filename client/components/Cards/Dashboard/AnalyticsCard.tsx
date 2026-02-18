import React from 'react';

interface AnalyticsCardProps {
  data: {
    value: string | number;
    icon: React.ReactNode;
    descriptionIcon: React.ReactNode;
    descriptionText: string;
    bgColor?: string;
  };
}
const AnalyticsCard = ({ data }: AnalyticsCardProps) => {
  return (
    <div className="bg-white dark:bg-orange-100 rounded-lg shadow p-4">
      <div className="flex items-center mb-2">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center p-2  ${data.bgColor || 'bg-orange-200/50'}`}
        >
          {data.icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold ml-2 text-gray-800">
            {data.value}
          </h2>
          <div>
            <span className="flex items-center text-sm text-gray-500 dark:text-black ml-2">
              {data.descriptionIcon}
              <span className="ml-1 text-xs">{data.descriptionText}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
