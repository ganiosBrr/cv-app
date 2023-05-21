import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './navigation';

describe('Navigation component', () => {
  test('renders the navigation items', () => {
    render(<Navigation />);
    
    const navItems = screen.getAllByTestId('link');
    expect(navItems.length).toBe(7);
    
    const navTexts = navItems.map((navItem) => navItem.textContent);
    expect(navTexts).toEqual([
      'About Me',
      'Education',
      'Experience',
      'Skills',
      'Portfolio',
      'Contacts',
      'Feedbacks'
    ]);
  });
  
  test('scrolls to section when clicked', () => {
    render(<Navigation />);
    
    const navItem = screen.getByText('About Me');
    fireEvent.click(navItem);
  });
});
