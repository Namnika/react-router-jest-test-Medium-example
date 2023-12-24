import { render, cleanup, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import App from "../App";
import { MemoryRouter, Route, Router } from "react-router-dom";

describe("App", () => {
  afterEach(() => cleanup());
  test("should render page not found when no match route", () => {
    const history = createMemoryHistory({ intialEntries: ["/"] });
    history.push("/bad/route");

    render(
      <Router history={history}>
        <App />
      </Router>,
    );

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  });
});
