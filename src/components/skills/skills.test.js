import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Skills from './skills';
import { toggleForm } from '../../features/skills/skillsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Skills component', () => {
  let dispatchMock;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  test('renders Skills component', () => {
    useSelector.mockReturnValueOnce(false); // formRender
    useSelector.mockReturnValueOnce([]); // skills

    render(<Skills />);

    expect(screen.getByText('Open edit')).toBeInTheDocument();
  });

  test('toggles form on button click', () => {
    useSelector.mockReturnValueOnce(true); // formRender
    useSelector.mockReturnValueOnce([]); // skills

    render(<Skills />);

    fireEvent.click(screen.getByText('Open edit'));

    expect(dispatchMock).toHaveBeenCalledWith(toggleForm());
  });

});
