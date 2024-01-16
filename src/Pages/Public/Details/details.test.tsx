import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from './';

test('renders Details', () => {
  render(<Details />);
  const linkElement = screen.getByText(/Details/i);
  expect(linkElement).toBeInTheDocument();
});
