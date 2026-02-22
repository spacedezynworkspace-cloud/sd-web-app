import React, { use, useEffect } from 'react';

import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  Pagination,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from '@heroui/react';

export type UserRow = {
  id: string;
  projectTitle: string;
  client: string;
  team: string;
  //   status: 'active' | 'paused' | 'vacation';
  status: number;
  email: string;
  location?: string;
  supervisor: string;
  age: string;
  avatar: string;
  phase?: string;
  budget?: string;
  startDate?: string;
};

export const columns: {
  name: string;
  uid: keyof UserRow | 'actions';
}[] = [
  { name: 'Project Name', uid: 'projectTitle' },
  { name: 'Client', uid: 'client' },
  { name: 'Date Started', uid: 'startDate' },
  { name: 'Status', uid: 'status' },
  { name: 'Phase', uid: 'phase' },
  { name: 'Location', uid: 'location' },
  { name: 'Budget', uid: 'budget' },
];
export const users: UserRow[] = [
  {
    id: '1',
    projectTitle: 'Lagos Mall',
    client: 'Mr & Mrs Tokunbo',
    phase: 'Planning',
    location: 'Lagos',
    budget: '$100,000',
    startDate: 'Feb 5, 2026',
    supervisor: 'CEO',
    team: 'Management',
    status: 1,
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: '2',
    projectTitle: 'Office Complex',
    client: 'Mrs Adebayo',
    phase: 'Design',
    location: 'Ikoyi',
    budget: '$150,000',
    startDate: 'Mar 10, 2026',
    supervisor: 'Technical Lead',
    team: 'Development',
    status: 4,
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: '3',
    projectTitle: 'Lounge Renovation',
    client: 'Mr Jameson',
    phase: 'Execution',
    location: 'Lagos',
    budget: '$200,000',
    startDate: 'Apr 25, 2026',
    supervisor: 'Senior Developer',
    team: 'Development',
    status: 3,
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: '4',
    projectTitle: 'Hotel Expansion',
    client: 'Mr Martins',
    phase: 'Closure',
    location: 'Abuja',
    budget: '$120,000',
    startDate: 'Apr 28, 2026',
    supervisor: 'Community Manager',
    team: 'Marketing',
    status: 4,
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: '5',
    projectTitle: 'Shortlet Renovation',
    client: 'Mr & Mrs Okoro',
    phase: 'Planning',
    location: 'Abuja',
    budget: '$80,000',
    startDate: 'May 12, 2026',
    supervisor: 'Sales Manager',
    team: 'Sales',
    status: 5,
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
  {
    id: '6',
    projectTitle: 'Mall Renovation',
    client: 'Mr & Mrs Okoro',
    phase: 'Design',
    location: 'Lagos',
    budget: '$180,000',
    startDate: 'Jun 1, 2026',
    supervisor: 'HR Manager',
    team: 'HR',
    status: 2,
    age: '26',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026700d',
    email: 'kristen.cooper@example.com',
  },
  {
    id: '7',
    projectTitle: 'Office Renovation',
    client: 'Mr & Mrs Okoro',
    phase: 'Execution',
    location: 'Ibadan',
    budget: '$90,000',
    startDate: 'Jun 15, 2026',
    supervisor: 'HR Manager',
    team: 'HR',
    status: 1,
    age: '26',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026700d',
    email: 'kristen.cooper@example.com',
  },
  {
    id: '8',
    projectTitle: 'Hotel Expansion',
    client: 'Mr Martins',
    phase: 'Closure',
    location: 'Abuja',
    budget: '$120,000',
    startDate: 'Apr 28, 2026',
    supervisor: 'Community Manager',
    team: 'Marketing',
    status: 4,
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: '9',
    projectTitle: 'Hotel Expansion',
    client: 'Mr Martins',
    phase: 'Closure',
    location: 'Abuja',
    budget: '$120,000',
    startDate: 'Apr 28, 2026',
    supervisor: 'Community Manager',
    team: 'Marketing',
    status: 3,
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: '10',
    projectTitle: 'Hotel Expansion',
    client: 'Mr Martins',
    phase: 'Closure',
    location: 'Abuja',
    budget: '$120,000',
    startDate: 'Apr 28, 2026',
    supervisor: 'Community Manager',
    team: 'Marketing',
    status: 3,
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: '11',
    projectTitle: 'Hotel Expansion',
    client: 'Mr Martins',
    phase: 'Closure',
    location: 'Abuja',
    budget: '$120,000',
    startDate: 'Apr 28, 2026',
    supervisor: 'Community Manager',
    team: 'Marketing',
    status: 3,
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: '12',
    projectTitle: 'Hotel Expansion',
    client: 'Mr Martins',
    phase: 'Closure',
    location: 'Abuja',
    budget: '$120,000',
    startDate: 'Apr 28, 2026',
    supervisor: 'Community Manager',
    team: 'Marketing',
    status: 3,
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
];
const OperationsTable = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const renderCell = React.useCallback(
    (user: UserRow, columnKey: React.Key) => {
      const key = columnKey as keyof UserRow | 'actions';

      const cellValue = user[key as keyof UserRow];

      switch (key) {
        case 'projectTitle':
          return (
            <User
              avatarProps={{ radius: 'lg', src: user.avatar }}
              description={user.email}
              name={user.projectTitle}
            >
              {user.email}
            </User>
          );

        case 'client':
          return <div className="text-sm">{user.client}</div>;

        case 'phase':
          return <div className="text-sm">{user.phase}</div>;

        case 'budget':
          return <div className="text-sm">{user.budget}</div>;

        case 'startDate':
          return <div className="text-sm">{user.startDate}</div>;

        // case 'supervisor':
        //   return (
        //     <div className="flex flex-col">
        //       <p className="text-bold text-sm capitalize">{user.supervisor}</p>
        //       <p className="text-bold text-sm capitalize text-default-400">
        //         {user.team}
        //       </p>
        //     </div>
        //   );

        case 'status':
          return (
            <Progress
              aria-label="Project progress"
              classNames={{
                base: 'w-[220px]',
                // track: ' border border-default radius-lg',
                indicator: 'bg-orange-400',
                label: 'tracking-wider font-medium text-default-600',
                value: 'text-sm',
              }}
              color={
                user.status === 1
                  ? 'success'
                  : user.status === 2
                    ? 'danger'
                    : 'warning'
              }
              showValueLabel={true}
              size="md"
              value={user.status * 20}
              //   isIndeterminate={true}
            />
          );

        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="cursor-pointer">
                  <EyeIcon className="w-5 h-5" />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="cursor-pointer">
                  <PencilIcon className="w-5 h-5" />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="cursor-pointer">
                  <TrashIcon className="w-5 h-5" />
                </span>
              </Tooltip>
            </div>
          );

        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Table
      aria-label="Operations table"
      color="warning"
      className="relative"
      defaultSelectedKeys={['2']}
      selectionMode="single"
      isHeaderSticky
      bottomContent={
        <div className="relative left-0 w-full flex items-center justify-end py-4">
          <Pagination
            isCompact
            showControls
            showShadow
            color="warning"
            className="hover:cursor-pointer  sm:w-auto flex items-center justify-end"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody<UserRow> items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
  //   return (
  //     <Table
  //       aria-label="RTK Query async pagination table"
  //       bottomContent={
  //         pages > 0 ? (
  //           <div className="flex w-full justify-center">
  //             <Pagination
  //               isCompact
  //               showControls
  //               showShadow
  //               color="primary"
  //               page={page}
  //               total={pages}
  //               onChange={setPage}
  //             />
  //           </div>
  //         ) : null
  //       }
  //     >
  //       <TableHeader>
  //         <TableColumn key="name">Name</TableColumn>
  //         <TableColumn key="height">Height</TableColumn>
  //         <TableColumn key="mass">Mass</TableColumn>
  //         <TableColumn key="birth_year">Birth year</TableColumn>
  //       </TableHeader>

  //       <TableBody
  //         items={data?.results ?? []}
  //         loadingContent={<Spinner />}
  //         loadingState={loadingState}
  //       >
  //         {(item) => (
  //           <TableRow key={item.name}>
  //             {(columnKey) => (
  //               <TableCell>
  //                 {getKeyValue(item, columnKey)}
  //               </TableCell>
  //             )}
  //           </TableRow>
  //         )}
  //       </TableBody>
  //     </Table>
  //   );
};

export default OperationsTable;
