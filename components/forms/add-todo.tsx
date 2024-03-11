import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { addTodo } from '@/actions';

export const AddTodoForm = () => {
  const { pending } = useFormStatus();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='default'>Add new Todo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add a new Todo to your list of todos.
          </DialogDescription>
        </DialogHeader>
        <form action={addTodo} className='space-y-6'>
          <div className='space-y-2'>
            <Label htmlFor='title'>Title</Label>
            <Input id='title' name='title' placeholder='Title' />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button disabled={pending} type='submit' size='sm'>
                Add Todo
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
