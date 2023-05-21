import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Panel from './panel';

describe('Panel component', () => {
  test('renders the panel when `panelRender` is true', () => {
    render( <BrowserRouter>
        <Panel panelRender={true} />
      </BrowserRouter>);
    
    const photoBox = screen.getByText('John Doe');
    expect(photoBox).toBeInTheDocument();
    
    const backButton = screen.getByText('Go back');
    expect(backButton).toBeInTheDocument();
  });
  
  test('does not render the panel when `panelRender` is false', () => {
    render(<Panel panelRender={false} />);
    
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Go back')).not.toBeInTheDocument();
  });
});
