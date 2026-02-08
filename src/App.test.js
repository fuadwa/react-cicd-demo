import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react text', () => {
  render(<App />);
  const textElement = screen.getByText(/react/i);
  expect(textElement).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const textElement = screen.getByText(/hellow world/i);
  expect(textElement).toBeInTheDocument();
});
