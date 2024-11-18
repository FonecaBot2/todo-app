import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTodoStore } from "../../store/useTodoStore";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type DeleteTodoDialogProps = {
  todoId: number;
};

const DeleteTodoDialog: React.FC<DeleteTodoDialogProps> = ({ todoId }) => {
  const { removeTodo } = useTodoStore();

  const handleDelete = () => {
    removeTodo(todoId);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-7 h-7 m-0 p-0 bg-zinc-800 text-teal-500 border-none hover:text-teal-600 hover:bg-zinc-800 hover:border-none focus:border-none"
          data-testid="delete-todo-button"
        >
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-white">Delete Todo</DialogTitle>
          <DialogDescription className="text-white">
            Are you sure you want to delete this todo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={handleDelete}
            variant="ghost"
            type="submit"
            className=" bg-teal-500 text-gray-900 hover:bg-teal-600"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTodoDialog;
