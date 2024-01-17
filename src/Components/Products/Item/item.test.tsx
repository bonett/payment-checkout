import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from './';
import { Provider } from "react-redux";
import store from "Store";
import { RESPONSE_SERVER } from 'Constants';

describe("Product Item component", () => {
  test('Should render ProductItem', () => {
    const { container } = render(
      <Provider store={store}>
        <ProductItem product={RESPONSE_SERVER[0]} />
      </Provider>
    );
    
    const title = screen.getByText(/black boots, 100% original leather/i);
    const description = screen.getByText(/Magna eiusmod proident non culpa et in sunt consectetur esse amet sit Enim et exercitation mollit duis sit elit exercitation non magna Ipsum sint commodo laboris non adipisicing ad dolor aliquip est voluptate ut Aute enim dolore aute non Tempor magna excepteur ut sit Lorem irure deserunt in proident/i);
    const button = screen.getByRole("button", { name: /Buy/i });
    const image = screen.getByAltText(/black boots, 100% original leather/i)
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://img.freepik.com/free-photo/travel-still-life-pack-top-view_23-2148837322.jpg?w=1800&t=st=1705363387~exp=1705363987~hmac=6e3c55c14a115cde11830ae5b8babaf38e22f4974aff67fa809b2a7efe449e62");
    expect(container).toMatchSnapshot();
  });
});