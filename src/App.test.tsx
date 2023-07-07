import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('No Recipe Found', ()=>{
  render(<App />);
  const linkElement = screen.getByText(/No Recipe Found/i);
  expect(linkElement).toBeInTheDocument();
})
