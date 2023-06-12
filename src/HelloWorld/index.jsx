import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	
} from 'remotion';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import { staticFile, Video } from "remotion";

export const HelloWorld = ({titleText, text1, text2, video }) => {
	const frame = useCurrentFrame();
	const {durationInFrames } = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{ opacity }}>
			<Sequence  durationInFrames={650}>
			<AbsoluteFill style={{transform: `translateY(${1}}px) scale(1)`}}>
				<Video loop src={staticFile(`videos/${video}`)} />
				</AbsoluteFill>
				</Sequence>
				
				{/* Sequences can shift the time for its children! */}
				<Sequence  durationInFrames={600}>
					<Title titleText={titleText} />
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence  durationInFrames={205}>
					<Subtitle text={text1} />
				</Sequence>
				<Sequence from={250} durationInFrames={200}>
					<Subtitle text={text2} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
