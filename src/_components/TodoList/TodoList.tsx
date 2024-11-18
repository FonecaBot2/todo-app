import { CircleCheck, Circle } from "lucide-react";
import { useTodoStore } from "../../store/useTodoStore";
import EditTodoDialog from "../EditTodoDialog/EditTodoDialog";
import DeleteTodoDialog from "../DeleteTodoDialog/DeleteTodoDialog";

const TodoList = () => {
  const { todos, toggleComplete } = useTodoStore();

  return (
    <div className="grid grid-cols-1 gap-4">
      {todos.map((todo) => (
        <div key={todo.id} className="p-4 rounded-lg bg-zinc-800 max-w-3xl">
          <div className="flex flex-1 flex-row items-center gap-3">
            <button
              onClick={() => toggleComplete(todo.id)}
              className="w-7 h-7 m-0 p-0 bg-zinc-800 text-gray-400 border-none hover:text-gray-600 hover:bg-zinc-800 hover:border-none focus:border-none"
              aria-label={
                todo.completed ? "Mark as Incomplete" : "Mark as Complete"
              }
            >
              {todo.completed ? <CircleCheck /> : <Circle />}
            </button>
            <h2
              className={`text-lg font-semibold mb-1 ${todo.completed ? "text-gray-400 line-through" : "text-white"} ${todo.title.length > 25 ? "truncate" : ""}`}
            >
              {todo.title}
            </h2>
          </div>
          <div className="flex justify-end gap-3 mt-2 items-center">
            <EditTodoDialog todo={todo} />
            <DeleteTodoDialog todoId={todo.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
