import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders monproweb link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Monproweb/i);
  expect(linkElement).toBeInTheDocument();
});
