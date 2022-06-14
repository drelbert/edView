import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders main element", () => {
    render(<Home />);

    const main = screen.getByRole("main", {
      title: "main",
    });

    expect(main).toBeInTheDocument;
  });
});
