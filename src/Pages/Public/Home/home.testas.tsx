import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";
import { Provider } from "react-redux";
import store from "Store";

describe("Home page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  test("Should render Home", () => {});
});
