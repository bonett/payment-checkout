import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NoMatch from "./";

describe("Not found page", () => {
  test("Should be render page", () => {
    const { container } = render(
      <BrowserRouter>
        <NoMatch />
      </BrowserRouter>
    );

    const text = screen.getByText(/Page Not Found/i);
    const buttonAsLink = screen.getByRole("link", { name: /Go Home/i });
    expect(text).toBeInTheDocument();
    expect(buttonAsLink).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Should go home button clicked", () => {
    const { container } = render(
      <BrowserRouter>
        <NoMatch />
      </BrowserRouter>
    );

    const buttonAsLink = screen.getByRole("link", { name: /Go Home/i });
    fireEvent.click(buttonAsLink, { button: 0});
    expect(buttonAsLink).toHaveAttribute("href", "/");
    expect(container).toMatchSnapshot();
  });
});
