import { columns } from '@/components/todos/columns';
import { DataTable } from '@/components/todos/table';
import prismadb from '@/prisma/prismadb';

async function getTodos() {
  const todos = prismadb.todo.findMany();
  return todos;
}
export default async function Home() {
  const todos = await getTodos();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pb-24'>
      <div className='container max-w-2xl'>
        <DataTable
          data={todos}
          columns={columns}
          sortingState={[
            {
              id: 'updatedAt',
              desc: true,
            },
          ]}
        />
      </div>
    </main>
  );
}
