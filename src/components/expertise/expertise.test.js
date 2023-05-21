import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Expertise from './expertise';

describe('Expertise component', () => {
  const expertiseData = [
    {
      info: {
        company: 'ABC Company',
        job: 'Frontend Developer',
        description: 'Worked on frontend development tasks',
      },
      date: '2019-2020',
    },
    {
      info: {
        company: 'XYZ Company',
        job: 'Backend Developer',
        description: 'Implemented backend functionality',
      },
      date: '2020-2021',
    },
  ];

  test('renders expertise items', () => {
    render(<Expertise data={expertiseData} />);
    const expertiseItems = screen.getAllByTestId('expertise-item');
    expect(expertiseItems).toHaveLength(2);
  });

  test('renders expertise item with company, job, date, and description', () => {
    render(<Expertise data={expertiseData} />);

    const companyHeading = screen.getByText('ABC Company');
    expect(companyHeading).toBeInTheDocument();

    const jobHeading = screen.getByText('Frontend Developer');
    expect(jobHeading).toBeInTheDocument();

    const dateSpan = screen.getByText('2019-2020');
    expect(dateSpan).toBeInTheDocument();

    const descriptionParagraph = screen.getByText('Worked on frontend development tasks');
    expect(descriptionParagraph).toBeInTheDocument();
  });
});
