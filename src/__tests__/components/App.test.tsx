import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../layouts/home/App';
import {BrowserRouter} from "react-router-dom";

test('renders favorites title', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByRole('heading', { name: /favorites/i });
  expect(linkElement).toBeInTheDocument();
});
