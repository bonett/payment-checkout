import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './';

test('renders Navigation', () => {
  render(<Navigation />);
  /* const linkElement = screen.getByText(/Created by Wilfrido Bonett - Copyright © 2024/i);
  expect(linkElement).toBeInTheDocument(); */
});
