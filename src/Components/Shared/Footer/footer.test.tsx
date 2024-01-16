import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './';

test('renders Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Created by Wilfrido Bonett - Copyright © 2024/i);
  expect(linkElement).toBeInTheDocument();
});
