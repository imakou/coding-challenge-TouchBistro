import App from "../App";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import FetchMock from "jest-fetch-mock";

describe("MedianPrimeNumberList", () => {
  beforeEach(() => {
    FetchMock.resetMocks();
  });

  test("entire e2e test", async () => {
    FetchMock.mockResponseOnce(JSON.stringify({ data: [2, 3] }));
    render(<App />);
    const searchInput = screen.getByRole("searchInput");
    const searchButton = screen.getByRole("searchButton");

    // search median prime number for upper limit 10
    fireEvent.change(searchInput, { target: { value: "10" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      // Assert that the median prime number is 2, 3
      const historyItem = screen.getByText("2, 3");
      const upperLimit = screen.getByText(10);
      expect(searchInput).toHaveValue("10");
      expect(upperLimit).toBeInTheDocument();
      expect(historyItem).toBeInTheDocument();

      // remove history item
      const historyRemoveBtn = screen.getByTestId(10);
      fireEvent.click(historyRemoveBtn);
      expect(historyRemoveBtn).not.toBeInTheDocument();
    });
  });
});
