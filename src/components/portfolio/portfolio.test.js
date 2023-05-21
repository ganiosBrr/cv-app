import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Portfolio from './portfolio';

describe('Portfolio component', () => {
  test('renders portfolio items and filters them correctly', () => {
    render(<Portfolio />);

    const allProjects = screen.getAllByTestId('portfolio-item');
    expect(allProjects.length).toBe(4);

    fireEvent.click(screen.getByText('Ui'));
    const uiProjects = screen.getAllByTestId('portfolio-item');
    expect(uiProjects.length).toBe(2);

    fireEvent.click(screen.getByText('Code'));
    const codeProjects = screen.getAllByTestId('portfolio-item');
    expect(codeProjects.length).toBe(2);

    fireEvent.click(screen.getByText('All'));
    const allProjectsAgain = screen.getAllByTestId('portfolio-item');
    expect(allProjectsAgain.length).toBe(4);
  });
});
