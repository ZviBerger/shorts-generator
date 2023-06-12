import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import { FONT_FAMILY } from './constants';

const subtitle = {
	fontFamily: FONT_FAMILY,
	fontSize: '120px',
	fontWeight: '380',
	textAlign: 'center',
	// Color: '#2e2e2e',
	color: '#ffffff',
	margin: 'auto',
	marginTop: '700px',
	Background: '#2e2e2e',
	padding: '30px',
	width: '800px',
	borderRadius: '20px',
	border: '10px solid rgb(255 255 255 / 9%)',
};


export const Subtitle = ({ text }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div style={{...subtitle, opacity}}>
			{text}
		</div>
	);
};
