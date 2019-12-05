import React, { useState } from 'react'
import styled from 'styled-components'

import Display from './display'

const Button = styled.button`
	margin: 1em;
	font-size: 1.2rem;
	color: #fff;
	padding: 0.3em 1.5em;
	letter-spacing: 0.05em;
	background: #44e;
	border: none;
	border-radius: 0.2em;
`;

function Dashboard() {
	const [ballCount, setBallCount] = useState(0);
	const [strikeCount, setStrikeCount] = useState(0);

	const strike = (evt) => {
		console.log(evt.target)
	}

	const ball = (evt) => {
		console.log(evt.target)
	}

	const foul = (evt) => {
		console.log(evt.target)
	}

	const hit = (evt) => {
		console.log(evt.target)
	}


	return (
		<div>
			<Display ballCount={ballCount} strikeCount={strikeCount} />
			<Button onClick={strike}>Strike</Button>
			<Button onClick={ball}>Ball</Button>
			<Button onClick={foul}>Foul</Button>
			<Button onClick={hit}>Hit</Button>
		</div>
	)
}

export default Dashboard