'use client';

import React from 'react';
import { ChartFilter } from '@/types';
import { Button, ButtonGroup } from '@heroui/react';

interface ChartFilterToggleProps {
  value: ChartFilter;
  onChange: (value: ChartFilter) => void;
}

const ChartFilterToggle = ({ value, onChange }: ChartFilterToggleProps) => {
  const filters: { label: string; value: ChartFilter }[] = [
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
  ];

  return (
    <ButtonGroup>
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={value === filter.value ? 'solid' : 'flat'}
          className={
            value === filter.value
              ? 'bg-[#F19645] text-white font-semibold'
              : ''
          }
          onPress={() => onChange(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ChartFilterToggle;
