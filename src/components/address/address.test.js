import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './address';

describe('Address component', () => {
  test('renders address items', () => {
    render(<Address />);
    const addressItems = screen.getAllByTestId('address-item');
    expect(addressItems).toHaveLength(5);
  });

  test('renders address item with icon, content, and link', () => {
    render(<Address />);
    const phoneIcon = screen.getAllByTestId('icon');
    expect(phoneIcon).toHaveLength(5);

    const phoneContent = screen.getByText('500 342 242');
    expect(phoneContent).toBeInTheDocument();

    const phoneLink = screen.getByRole('link', { name: '500 342 242' });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+500 342 242');
  });
});
