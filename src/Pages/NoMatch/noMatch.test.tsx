import React from 'react';
import { render, screen } from '@testing-library/react';
import NoMatch from './';

test('renders learn react link', () => {
  render(<NoMatch />);
  const linkElement = screen.getByText(/404: Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});
