import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from './';
import { RESPONSE_SERVER } from 'Constants';

test('renders ProductList', () => {
  render(<ProductList products={RESPONSE_SERVER} />);
  /* expect(linkElement).toBeInTheDocument(); */
});