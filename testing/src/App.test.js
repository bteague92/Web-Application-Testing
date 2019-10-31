import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from "./components/dashboard"

test('displays strike button', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Strike');
})

test('displays ball button', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Ball');
})

test('displays foul button', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Foul');
})

test('displays hit button', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Hit');
})