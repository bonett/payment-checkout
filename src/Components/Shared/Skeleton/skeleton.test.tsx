import React from "react";
import { render, screen } from "@testing-library/react";
import Skeleton from "./";

describe("Skeleton component", () => {
  test("Should renders skeleton component", () => {
    const { container } = render(<Skeleton />);
  
    const cards = screen.getAllByTestId("skeleton-card");
    expect(cards.length).toEqual(6);
    expect(container).toMatchSnapshot();
  });
});
