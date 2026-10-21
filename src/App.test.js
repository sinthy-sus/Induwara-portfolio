import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Induwara Anupriya in portfolio', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Induwara Anupriya/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
