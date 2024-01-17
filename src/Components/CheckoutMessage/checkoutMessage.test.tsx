import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CheckoutMessage from "./";
import store from "Store";

describe("CheckoutMessage component", () => {
  test("Should renders CheckoutMessage component", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CheckoutMessage
            message={"Payment successfully"}
            payment={{ product: "Iphone 12", price: 12321 }}
          />
        </BrowserRouter>
      </Provider>
    );

    const titleSucess = screen.getByText(/Payment successfully/i);
    const productName = screen.getByText(/Iphone 12/i);
    expect(titleSucess).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Should renders error in component", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CheckoutMessage message={"Error, something was wrong"} />
        </BrowserRouter>
      </Provider>
    );

    const titleSucess = screen.getByText(/Error, something was wrong/i);
    expect(titleSucess).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
