import React from 'react';
import { render, screen } from '@testing-library/react';
import Purchased from './';

test('renders purchased', () => {
  render(<Purchased />);
  const linkElement = screen.getByText(/Purchased/i);
  expect(linkElement).toBeInTheDocument();
});
