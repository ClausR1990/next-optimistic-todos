'use server';

import prismadb from '@/prisma/prismadb';
import { CheckedState } from '@radix-ui/react-checkbox';
import { revalidatePath } from 'next/cache';

export const toggleCompleted = async (state: CheckedState, id: number) => {
  await prismadb.todo.update({
    where: {
      id,
    },
    data: {
      completed: state as boolean,
    },
  });
  revalidatePath('/');
};

export const addTodo = async (data: FormData) => {
  const title = data.get('title') as string;
  try {
    await prismadb.todo.create({
      data: {
        title: title,
      },
    });
    revalidatePath('/');
  } catch (error) {
    console.error(error);
  }
};
