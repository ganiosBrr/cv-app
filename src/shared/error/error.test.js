import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './error';

describe('Error component', () => {
  test('renders message and className correctly', () => {
    const message = 'Sample error message';
    const className = 'sample-class';

    render(<Error message={message} className={className} />);

    const messageElement = screen.getByText(message);
    const errorElement = screen.getByTestId('error-component');

    expect(messageElement).toBeInTheDocument();
    expect(errorElement).toHaveClass(className);
  });
});
