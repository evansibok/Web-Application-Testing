import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

afterEach(rtl.cleanup)

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  const h2Text = wrapper.getByText(/baseball/i);
  expect(h2Text).toBeInTheDocument();
});
