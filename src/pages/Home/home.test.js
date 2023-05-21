import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './home';

test('renders Home component', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const photoBoxElement = screen.getByRole('img');
  const buttonElement = screen.getByText('Know more');

  expect(photoBoxElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
