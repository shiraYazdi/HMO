import { render, screen } from '@testing-library/react';
import AllMembers from './AllMembers';

test('renders members header', () => {
  render(<AllMembers />);
  const headerElement = screen.getByText(/All Members/i);
  expect(headerElement).toBeInTheDocument();
});
