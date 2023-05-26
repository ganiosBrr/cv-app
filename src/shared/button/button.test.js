import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './button';

describe('Button component', () => {
  test('renders button with text', () => {
    const text = 'Click me';
    render(<Button text={text} />);
    const buttonElement = screen.getByText(text);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button text="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
