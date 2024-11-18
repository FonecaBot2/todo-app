import { useEffect } from "react";
import { useTimeStore } from "../store/useTimeStore";
import { useTodoStore } from "../store/useTodoStore";
import AddNewTodo from "../_components/AddNewTodoDialog/AddNewTodoDialog";
import TodoList from "../_components/TodoList/TodoList";

function Todos() {
  const { currentTime, fetchTime } = useTimeStore();
  const { fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTime();
    fetchTodos();
  }, [fetchTime, fetchTodos]);

  const formattedDate = currentTime
    ? new Date(currentTime).toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Loading...";

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-row justify-between">
        <h1>{formattedDate}</h1>
        <AddNewTodo />
      </div>
      <TodoList />
    </div>
  );
}

export default Todos;
