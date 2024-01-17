import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./";
import { RESPONSE_SERVER } from "Constants";
import { Provider } from "react-redux";
import store from "Store";

describe("Product List component", () => {
  test("Should render ProductList with 8 cards", () => {
    const { container } = render(
      <Provider store={store}>
        <ProductList products={RESPONSE_SERVER} />
      </Provider>
    );

    const cards = screen.getAllByTestId("product-card");
    expect(cards.length).toEqual(8);
    expect(container).toMatchSnapshot();
  });
});
