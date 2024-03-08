'use client';

import { Todo } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'completed',
    header: 'Completed',
    cell: (row) => {
      const value = row.getValue();
      return (
        <div className='flex items-center justify-end pr-4'>
          <Checkbox checked={value as boolean} />
        </div>
      );
    },
  },
];
