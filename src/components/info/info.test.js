import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from './info';

describe('Info component', () => {
  test('renders the text', () => {
    const text = 'This is some information';
    render(<Info text={text} />);
    
    const infoElement = screen.getByText(text);
    expect(infoElement).toBeInTheDocument();
  });
});
