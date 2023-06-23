import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './address';

describe('Address component', () => {
  test('renders address items', () => {
    render(<Address />);
    const addressItems = screen.getAllByTestId('address-item');
    expect(addressItems).toHaveLength(4);
  });

  test('renders address item with icon, content, and link', () => {
    render(<Address />);
    const phoneIcon = screen.getAllByTestId('icon');
    expect(phoneIcon).toHaveLength(4);

    const phoneContent = screen.getByText('+77071480046');
    expect(phoneContent).toBeInTheDocument();

    const phoneLink = screen.getByRole('link', { name: '+77071480046' });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+77071480046');
  });
});
