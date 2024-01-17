import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./";

describe("Footer component", () => {  
  test("Should renders footer componente", () => {
    const { container } = render(<Footer />);

    const text = screen.getByText(
      /Created by Wilfrido Bonett - Copyright © 2024/i
    );
    expect(text).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
