import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditTodoDialog from "./EditTodoDialog";

describe("EditTodoDialog", () => {
  const mockTodo = { id: 1, title: "Old Todo" };

  it("renders correctly", () => {
    render(<EditTodoDialog todo={mockTodo} />);

    const openButton = screen.getByRole("button");
    expect(openButton).toBeInTheDocument();

    fireEvent.click(openButton);

    const input = screen.getByDisplayValue(mockTodo.title);
    expect(input).toBeInTheDocument();
  });

  it("should update the text input when typing", () => {
    render(<EditTodoDialog todo={mockTodo} />);

    const openButton = screen.getByRole("button");
    fireEvent.click(openButton);

    const input = screen.getByDisplayValue(mockTodo.title);
    fireEvent.change(input, { target: { value: "Updated Todo" } });
    expect(input).toHaveValue("Updated Todo");
  });

  it("should close the dialog when form is submitted", async () => {
    render(<EditTodoDialog todo={mockTodo} />);

    const openButton = screen.getByRole("button");
    fireEvent.click(openButton);

    const input = screen.getByDisplayValue(mockTodo.title);
    fireEvent.change(input, { target: { value: "Updated Todo" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(saveButton).not.toBeInTheDocument();
    });
  });
});
