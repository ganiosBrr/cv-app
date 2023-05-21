import React from 'react';
import { render, screen } from '@testing-library/react';
import Feedback from './feedback';

describe('Feedback component', () => {
  const photo = 'avatar.jpg';

  test('renders feedback items', () => {
    render(<Feedback photo={photo} />);
    const feedbackItems = screen.getAllByTestId('feedback-item');
    expect(feedbackItems).toHaveLength(3);
  });

});
