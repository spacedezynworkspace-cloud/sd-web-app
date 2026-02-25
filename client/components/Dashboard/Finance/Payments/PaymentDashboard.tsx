import React, { useCallback } from 'react';
import useDebounce from '@/hooks/useDebounceHook';
import { useGetAllProjectsQuery } from '@/lib/services/projects/projects.api';
import { Project } from '@/types/projects.types';
import PaymentsTable from './PaymentsTable';

const PaymentDashboard = () => {
  const statuses = [
    { key: '', label: 'All' },
    { key: '5', label: 'Completed' },
    { key: '3', label: 'In Progress' },
    { key: '1', label: 'Inspection' },
  ];
  const phases = [
    { key: '', label: 'All' },
    { key: '0', label: 'Planning' },
    { key: '1', label: 'Design' },
    { key: '2', label: 'Execution' },
    { key: '3', label: 'Closure' },
  ];
  const locations = [
    { key: '', label: 'All' },
    { key: 'abuja', label: 'Abuja' },
    { key: 'ibadan', label: 'Ibadan' },
    { key: 'lagos', label: 'Lagos' },
  ];

  const [page, setPage] = React.useState<number>(1);

  const [search, setSearch] = React.useState<string>('');
  const debouncedSearch = useDebounce(search, 500);

  const [statusFilter, setStatusFilter] = React.useState<string>('');
  const [phaseFilter, setPhaseFilter] = React.useState<string>('');
  const [locationFilter, setLocationFilter] = React.useState<string>('');

  const [sortBy, setSortBy] = React.useState<string>('createdAt');
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('desc');

  // 🔥 Reset page when filters/search change
  React.useEffect(() => {
    setPage(1);
  }, [debouncedSearch, statusFilter, phaseFilter, sortBy, sortOrder]);

  const { data, isLoading } = useGetAllProjectsQuery({
    page,
    limit: 10,
    search: debouncedSearch,
    status: statusFilter ? Number(statusFilter) : undefined,
    phase: phaseFilter ? Number(phaseFilter) : undefined,
    state: locationFilter,
    sortBy,
    sortOrder,
  });

  const projects: Project[] = data?.data ?? [];
  const totalPages = data?.pagination?.totalPages ?? 1;

  console.log('projects:', projects);

  const handleSort = useCallback(
    (column: string) => {
      if (sortBy === column) {
        setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortBy(column);
        setSortOrder('asc');
      }
    },
    [sortBy, sortOrder]
  );

  return (
    <div>
      <PaymentsTable
        projects={projects}
        handleSort={handleSort}
        isLoading={isLoading}
        search={search}
        setSearch={setSearch}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default PaymentDashboard;
