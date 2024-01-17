import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CreditCardComponent from "./";
import store from "Store";

describe("CreditCard component", () => {
  test("Should renders CreditCard component", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreditCardComponent/>
        </BrowserRouter>
      </Provider>
    );

    const number = screen.getByText(/•••• •••• •••• ••••/i);
    const name = screen.getByText(/YOUR NAME HERE/i);
    expect(number).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
