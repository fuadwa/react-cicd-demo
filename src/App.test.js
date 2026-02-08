import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello react world text', () => {
  render(<App />);
  const textElement = screen.getByText(/hello react world/i); // matches your App.js
  expect(textElement).toBeInTheDocument();
});
