import { render, screen } from "@testing-library/react";
import ListFilter from "../components/renderFilter";

test("List should be rendered", () => {
  render(<ListFilter />);

  const designer = screen.getAllByTestId("test");
});
