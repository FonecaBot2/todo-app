import { useState } from "react";
import { useTodoStore } from "../../store/useTodoStore";
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
import { FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const AddNewTodoDialog = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      alert('Todo added');
      setText("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-16 h-16 m-0 p-0 bg-zinc-900 text-teal-500 border-none hover:text-teal-600 hover:bg-zinc-900 hover:border-none focus:border-none"
          data-testid="add-new-todo"
        >
          <FilePlus size={64} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-white">Add New Todo</DialogTitle>
          <DialogDescription className="text-white">
            Enter a title for the new todo item and click "Add".
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddTodo} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <input
              id="todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter new todo"
              className="col-span-3 border-none text-white bg-zinc-800 focus:border-l-zinc-950 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-1"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="ghost"
                type="submit"
                className=" bg-teal-500 text-gray-900 hover:bg-teal-600"
              >
                Add
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTodoDialog;
