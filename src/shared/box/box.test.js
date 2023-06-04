import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './box';

describe('Box component', () => {
  test('renders title and content correctly', () => {
    const title = 'Sample Title';
    const content = <p>Sample Content</p>;
    const className = 'sample-class';
    const id = 'sample-id';

    render(
      <Box title={title} content={content} className={className} id={id} />
    );

    const titleElement = screen.getByText(title);
    const boxElement = screen.getByTestId('box-component');

    expect(titleElement).toBeInTheDocument();

    expect(boxElement).toHaveClass(className);
    expect(boxElement).toHaveAttribute('id', id);
  });
});
