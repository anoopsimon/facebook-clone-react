import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without errors', () => {
  render(<App />);
});

test('displays the header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Facebook/i);
  expect(headerElement).toBeInTheDocument();
});
