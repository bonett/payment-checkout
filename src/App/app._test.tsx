import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";
import { Provider } from "react-redux";
import store from "Store";

describe("App Page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("Should render App", () => {});
});
