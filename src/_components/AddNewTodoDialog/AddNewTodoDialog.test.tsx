import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddNewTodoDialog from "./AddNewTodoDialog";

describe("AddNewTodoDialog", () => {
  it("renders correctly", () => {
    render(<AddNewTodoDialog />);

    const openButton = screen.getByTestId("add-new-todo");
    expect(openButton).toBeInTheDocument();

    fireEvent.click(openButton);
    const input = screen.getByPlaceholderText("Enter new todo");
    expect(input).toBeInTheDocument();
  });

  it("should update the text input when typing", () => {
    render(<AddNewTodoDialog />);

    const openButton = screen.getByTestId("add-new-todo");
    fireEvent.click(openButton);

    const input = screen.getByPlaceholderText("Enter new todo");
    fireEvent.change(input, { target: { value: "New Todo" } });
    expect(input).toHaveValue("New Todo");
  });

  it("should close the dialog when form is submitted", async () => {
    render(<AddNewTodoDialog />);

    const openButton = screen.getByTestId("add-new-todo");
    fireEvent.click(openButton);

    const input = screen.getByPlaceholderText("Enter new todo");
    fireEvent.change(input, { target: { value: "New Todo" } });

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(addButton).not.toBeInTheDocument();
    });
  });
});
