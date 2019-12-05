import React, { useState, useEffect } from 'react'
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
		evt.preventDefault();
		setStrikeCount(strikeCount + 1);
	}

	const ball = (evt) => {
		evt.preventDefault();
		setBallCount(ballCount + 1);
	}

	const resetToZero = () => {
		setStrikeCount(0);
		setBallCount(0);
	}

	useEffect(() => {
		if (strikeCount === 3 || ballCount === 4) {
			resetToZero();
		}
	}, [strikeCount, ballCount])


	const foul = (evt) => {
		evt.preventDefault();
		if (strikeCount === 0 || strikeCount === 1) {
			setStrikeCount(strikeCount + 1)
		} else if (strikeCount === 2) {
			setStrikeCount(strikeCount)
		};
		return strikeCount
	}

	const hit = (evt) => {
		evt.preventDefault();
		resetToZero();
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