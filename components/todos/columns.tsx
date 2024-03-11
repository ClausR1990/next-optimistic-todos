'use client';

import { Todo } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { toggleCompleted } from '@/actions';

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-mx-4 text-xs'
        >
          Title
          <ArrowUpDown className='ml-2 h-3 w-3' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-mx-4 text-xs'
        >
          Created
          <ArrowUpDown className='ml-2 h-3 w-3' />
        </Button>
      );
    },
    cell: (row) => {
      const date = row.getValue<string>();
      return <div>{new Date(date).toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-mx-4 text-xs'
        >
          Updated
          <ArrowUpDown className='ml-2 h-3 w-3' />
        </Button>
      );
    },
    cell: (row) => {
      const date = row.getValue<string>();
      return <div>{new Date(date).toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: 'completed',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-mx-4 text-xs'
        >
          Completed
          <ArrowUpDown className='ml-2 h-3 w-3' />
        </Button>
      );
    },
    cell: (row) => {
      const checked = row.getValue<boolean>();
      const id = row.row.original.id;
      return (
        <div className='flex items-center justify-end pr-4'>
          <Checkbox
            checked={checked}
            value={id}
            onCheckedChange={(state) => toggleCompleted(state, id)}
          />
        </div>
      );
    },
  },
];
