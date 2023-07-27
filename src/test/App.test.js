import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders test app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test App/i);
  expect(linkElement).toBeInTheDocument();
});
