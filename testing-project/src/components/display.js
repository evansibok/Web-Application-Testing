import React from 'react'
import styled from 'styled-components'

const DisplayCon = styled.div`
	display: flex;
	justify-content: center;
	
	.disCon {
		padding: 1em;

		h5 {
			font-size: 2rem;
		}
		h3 {
			font-size: 5rem;
			color: #fff;
			margin: 0;
			background: #333;
			padding: 0.1em 1em;
		}
	}
`;

const Display = ({ ballCount, strikeCount }) => {


	return (
		<DisplayCon>
			<div className="disCon">
				<h5>Balls</h5>
				<h3>{ballCount}</h3>
			</div>

			<div className="disCon">
				<h5>Strikes</h5>
				<h3>{strikeCount}</h3>
			</div>

		</DisplayCon>
	)
}

export default Display
