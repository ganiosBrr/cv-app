import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

test('renders Spinner component', () => {
  render(<Spinner />);
  const spinnerElement = screen.getByTestId('spinner');

  expect(spinnerElement).toBeInTheDocument();
});
