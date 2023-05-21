import { render, screen } from '@testing-library/react';
import Timeline from './timeline';

describe('Timeline', () => {
  const data = [
    { date: '2022-01-01', title: 'Event 1', text: 'Event 1 description' },
    { date: '2022-02-01', title: 'Event 2', text: 'Event 2 description' },
  ];

  test('renders timeline items correctly', () => {
    const { getByText } = render(<Timeline data={data} />);

    data.forEach((item) => {
      const dateElement = screen.getByText(item.date);
      const titleElement = screen.getByText(item.title);
      const textElement = screen.getByText(item.text);

      expect(dateElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
      expect(textElement).toBeInTheDocument();
    });
  });
});
