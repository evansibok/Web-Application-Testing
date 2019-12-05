import React from 'react';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Display from './display'

afterEach(rtl.cleanup)

it('renders without crashing', () => {

	const wrapper = rtl.render(<Display />);

	const strikeText = wrapper.queryByText(/strikes/i)
	expect(strikeText).toBeInTheDocument()
})
