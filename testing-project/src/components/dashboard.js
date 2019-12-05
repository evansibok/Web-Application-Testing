import React, { useState } from 'react'
import styled from 'styled-components'

import Display from './display'

const Button = styled.button`
	margin: 1em 0.3em;
	font-size: 1.2rem;
	color: #fff;
	padding: 0.3em 1.5em;
	letter-spacing: 0.05em;
	background: #239339;
	border: none;
	border-radius: 0.2em;
`;

function Dashboard() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<Display />
			<Button>Strike</Button>
			<Button>Ball</Button>
			<Button>Foul</Button>
			<Button>Hit</Button>
		</div>
	)
}

export default Dashboard