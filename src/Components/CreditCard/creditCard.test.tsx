import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CreditCardComponent from "./";
import store from "Store";

const data = {
  number: "4423423423",
  name: "jhon doe",
  expiry: "34/25",
  cvc: "123",
  focus: "",
};

describe("CreditCard component", () => {
  test("Should renders CreditCard component", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreditCardComponent data={data} />
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
