import { create } from "zustand";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => void;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newTitle: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),

  fetchTodos: async () => {
    if (!localStorage.getItem("todos")) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        const todos = data.map((item: any) => ({
          userId: item.userId,
          id: item.id,
          title: item.title,
          completed: false,
        }));
        set({ todos });
        localStorage.setItem("todos", JSON.stringify(todos));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
  },

  addTodo: (title: string) => {
    set((state) => {
      const newTodo = {
        userId: 1,
        id: Date.now(),
        title,
        completed: false,
      };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    });
  },

  toggleComplete: (id: number) => {
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    });
  },

  removeTodo: (id: number) => {
    set((state) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    });
  },

  editTodo: (id: number, newTitle: string) => {
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    });
  },
}));
