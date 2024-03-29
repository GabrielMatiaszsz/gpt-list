'use client';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Loader2, Plus } from 'lucide-react';
import React from 'react'
import { DialogHeader } from './dialog';
import { Input } from './input';
import { Button } from './button';

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = React.useState('')
  return (
    <Dialog>
    <DialogTrigger>
      <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
        <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
        <h2 className="font-semibold text-green-600 sm:mt-2">
          New Note Book
        </h2>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Note Book</DialogTitle>
        <DialogDescription>
          You can create a new note by clicking the button below.
        </DialogDescription>
      </DialogHeader>
      <form>
        <Input placeholder="Name..." />
        <div className="h-4"></div>
        <div className="flex items-center gap-2">
          <Button type="reset" variant={"secondary"}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-green-600"
               />
            Create
          <Button/>
        </div>
      </form>
    </DialogContent>
  </Dialog>
  )
}

export default CreateNoteDialog