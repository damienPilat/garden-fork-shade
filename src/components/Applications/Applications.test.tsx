import {render, screen} from "@testing-library/react";
import Applications from "./Applications.tsx";

test('renders a single application card component', () => {
  render(<Applications />);
  // todo - properly add test to this component
  const companyTitle = screen.getByText(/Company/i);
  expect(companyTitle).toBeInTheDocument();
})
