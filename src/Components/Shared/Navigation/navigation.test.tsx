import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./";

describe("Navigation component", () => {
  test("Should renders navigation component", () => {
    const { container } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const image = screen.getByAltText("pay");
    expect(image).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Should validate logo img", () => {
    const { container } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const image = screen.getByAltText("pay");
    expect(image).toHaveAttribute("src", "logo.png");
    expect(container).toMatchSnapshot();
  });
});
