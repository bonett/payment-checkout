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

    const numberLabel = screen.getByText(/Enter card number/i);
    const nameLabel = screen.getByText(/Enter holdname/i);
    const expiryLabel = screen.getByText(/Enter expiry date/i);
    const cvcLabel = screen.getByText(/Enter cvc code/i);
    expect(numberLabel).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(expiryLabel).toBeInTheDocument();
    expect(cvcLabel).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
