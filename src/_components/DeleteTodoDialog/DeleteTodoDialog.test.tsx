import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteTodoDialog from "./DeleteTodoDialog";

describe("DeleteTodoDialog", () => {
  it("should render the dialog", async () => {
    render(<DeleteTodoDialog todoId={1} />);

    const triggerButton = screen.getByRole("button");
    expect(triggerButton).toBeInTheDocument();

    fireEvent.click(triggerButton);

    const dialogTitle = screen.getByText("Delete Todo");
    expect(dialogTitle).toBeInTheDocument();

    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  });
});
