import SingleApplication from "./SingleApplication.tsx";
import {render, screen} from "@testing-library/react";
import {TLoanType} from "../../types/types.ts";

const mockData = {
    "id": 1,
    "first_name": "Sherman",
    "last_name": "Gerlach",
    "loan_amount": 85268,
    "loan_type": "CBILS" as TLoanType,
    "email": "Carroll47@yahoo.com",
    "company": "Kulas, Renner and Dietrich",
    "date_created": new Date("2021-06-17T03:20:07.769Z"),
    "expiry_date": new Date("2024-05-01T13:06:24.956Z"),
    "avatar": "https://avatars.githubusercontent.com/u/52583916",
    "loan_history": [
      {
        "loan_started": new Date("2024-03-15T04:07:18.336Z"),
        "loan_ended": new Date("2024-10-14T21:29:40.739Z"),
        "principle": 5763,
        "interest_rate": 0.1,
        "interest": 576
      }
    ]
  }

test('renders a single application card component', () => {
  render(<SingleApplication application={mockData} />);
  const companyTitle = screen.getByText(/Company/i);
  expect(companyTitle).toBeInTheDocument();
})
