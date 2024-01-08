import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page footer", () => {
  render(<App />);
  const linkElement = screen.getByText(/All Right Reserve/i);
  expect(linkElement).toBeInTheDocument();
});
