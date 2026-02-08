import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const textElement = screen.getByText(/hellow world/i); // match the text in App.js
  expect(textElement).toBeInTheDocument();
});
