import React from 'react';
import { render, screen } from '@testing-library/react';
import Skeleton from '.';

test('renders Skeleton', () => {
  render(<Skeleton />);
  /* const linkElement = screen.getByText(/Created by Wilfrido Bonett - Copyright © 2024/i);
  expect(linkElement).toBeInTheDocument(); */
});
