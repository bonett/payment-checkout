import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from './';
import { RESPONSE_SERVER } from 'Constants';

test('renders ProductItem', () => {
  render(<ProductItem product={RESPONSE_SERVER[0]} />);
  /* expect(linkElement).toBeInTheDocument(); */
});
