'use client';

import { Input } from '@heroui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface PayrollSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const PayrollSearch = ({ search, setSearch }: PayrollSearchProps) => {
  return (
    <Input
      value={search}
      onValueChange={setSearch}
      placeholder="Search supervisor..."
      startContent={<MagnifyingGlassIcon className="w-5 h-5" />}
    />
  );
};

export default PayrollSearch;
