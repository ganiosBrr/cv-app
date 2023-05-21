import { render, screen } from '@testing-library/react';
import PhotoBox from './photoBox';

test('renders PhotoBox component with correct props', () => {
  const className = 'photo-box';
  const name = 'John Doe';
  const title = 'Software Engineer';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nSed euismod ligula sed justo convallis, ac aliquet sapien fringilla.';
  const avatar = 'path/to/avatar.jpg';

  render(
    <PhotoBox
      className={className}
      name={name}
      title={title}
      description={description}
      avatar={avatar}
    />
  );


  const nameElement = screen.getByRole('heading', { name });
  expect(nameElement).toBeInTheDocument();

  const titleElement = screen.getByRole('heading', { name: title });
  expect(titleElement).toBeInTheDocument();

  const descriptionElements = screen.getAllByTestId('desc');
  expect(descriptionElements).toHaveLength(2);

  const avatarElement = screen.getByAltText('User avatar');
  expect(avatarElement).toHaveAttribute('src', avatar);
});
