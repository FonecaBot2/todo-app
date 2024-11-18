import { useState } from "react";
import { useTodoStore } from "@/store/useTodoStore";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

type EditTodoDialogProps = {
  todo: { id: number; title: string };
};

const EditTodoDialog: React.FC<EditTodoDialogProps> = ({ todo }) => {
  const [text, setText] = useState(todo.title);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleEditTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      editTodo(todo.id, text);
      setText("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-7 h-7 m-0 p-0 bg-zinc-800 text-teal-500 border-none hover:text-teal-600 hover:bg-zinc-800 hover:border-none focus:border-none"
          data-testid="edit-todo-button"
        >
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-white">Edit Todo</DialogTitle>
          <DialogDescription className="text-white">
            Update the title of the todo item and click "Save".
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleEditTodo} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <input
              id="todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="col-span-3 border-none bg-zinc-800 text-white focus:border-l-zinc-950 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-1"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="ghost"
                type="submit"
                className=" bg-teal-500 text-gray-900 hover:bg-teal-600"
              >
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoDialog;
