import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the Contact Details', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Contact Details");
  expect(headingElement).toBeInTheDocument();
});