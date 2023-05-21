import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioInfo from './portfolioInfo';

describe('PortfolioInfo component', () => {
  test('renders title, text, and link correctly', () => {
    const title = 'Sample Title';
    const text = 'Sample Text';
    const url = 'https://example.com';

    render(<PortfolioInfo title={title} text={text} url={url} />);

    const titleElement = screen.getByText(title);
    const textElement = screen.getByText(text);
    const linkElement = screen.getByText('Visit Website');

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', url);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
