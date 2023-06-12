import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {FONT_FAMILY} from './constants';

const title = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'center',
	margin: 'auto',
	background: '#00000078',
	borderRadius: 20,
	marginTop: '250px',
	padding: 20,
};

const word = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const Title = ({titleText}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);


	const words = [titleText];

	return (
		<h1 style={title}>
			{words.map((t) => {
				return (
					<span
						key={t}
						style={{
							...word,
							color: '#fff',
							opacity,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
