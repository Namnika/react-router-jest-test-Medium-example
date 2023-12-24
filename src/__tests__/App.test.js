import { render, cleanup, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  afterEach(() => cleanup());
  test("should render page not found when no match route", () => {
    const badRoute = "/bad/route";

    const { getByText } = render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    );

    expect(getByText(/This page doesn't exist./i)).toBeInTheDocument();
  });
});
