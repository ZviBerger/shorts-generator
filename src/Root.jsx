import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

// Each <Composition> is an entry in the sidebar!
const facts = [
  {
    "first": "Warren Buffett bought his first stock at...", 
    "last": "the age of 11 and became a billionaire by the age of 32."
  },
  {
    "first": "Jeff Bezos initially started Amazon as an...", 
    "last": "online bookstore in his garage."
  },
  {
    "first": "Elon Musk became a multimillionaire in his...", 
    "last": "20s after selling his first company, Zip2 Corporation."
  },
  {
    "first": "Mark Zuckerberg famously dropped out of...", 
    "last": "Harvard University to focus on developing Facebook."
  },
  {
    "first": "Oprah Winfrey went from being a...", 
    "last": "talk show host to a media mogul, with a net worth of over $2 billion."
  },
  {
    "first": "Bill Gates co-founded Microsoft and...", 
    "last": "became one of the wealthiest individuals in the world."
  },
  {
    "first": "Kylie Jenner became the youngest...", 
    "last": "self-made billionaire at the age of 21."
  },
  {
    "first": "Richard Branson started his first business...", 
    "last": "at the age of 16 and went on to found the Virgin Group."
  },
  {
    "first": "Larry Page and Sergey Brin founded...", 
    "last": "Google in a garage while they were Ph.D. students at Stanford University."
  },
  {
    "first": "Jack Ma, the founder of Alibaba Group...", 
    "last": "started his career as an English teacher."
  },
  {
    "first": "Carlos Slim, a Mexican business magnate...", 
    "last": "has been one of the richest people in the world."
  },
  {
    "first": "Steve Jobs co-founded Apple and played...", 
    "last": "a pivotal role in revolutionizing the technology industry."
  },
  {
    "first": "Andrew Carnegie, once the richest...", 
    "last": "person in the world, made his fortune in the steel industry."
  },
  {
    "first": "Ingvar Kamprad, the founder of...", 
    "last": "IKEA, started his business by selling matches."
  },
  {
    "first": "Aliko Dangote, a Nigerian businessman...", 
    "last": "is the richest person in Africa."
  },
  {
    "first": "J.K. Rowling went from being...", 
    "last": "a struggling single mother to a billionaire author."
  },
  {
    "first": "George Soros is a billionaire...", 
    "last": "investor known for his philanthropy and political activism."
  },
  {
    "first": "Bernard Arnault is the CEO...", 
    "last": "of LVMH and one of the richest individuals in the fashion industry."
  },
  {
    "first": "Alice Walton, an heiress to...", 
    "last": "the Walmart fortune, is one of the wealthiest women in the world."
  },
  {
    "first": "Michael Bloomberg, the co-founder of...", 
    "last": "Bloomberg LP, served as the mayor of New York City."
  }
]


const videos = [
  '135658 (1080p).mp4',
  '138588 (1080p).mp4',
  '146169 (1080p).mp4',
  '153976-806571973 (1080p).mp4',
  '158384 (1080p).mp4',
  '164360 (1080p).mp4',
  'daisy_-_103485 (540p).mp4',
  'dubrovnik_-_12866 (1080p).mp4',
  'grass_-_66810 (1080p).mp4',
  'mountains_-_81945 (1080p).mp4',
  'mountains_-_91545 (1080p).mp4',
  'ocean_-_65560 (540p).mp4',
  'ocean_-_74888 (1080p).mp4',
  'sea_-_6399 (540p).mp4',
  'skyscrapers_-_80724 (1080p).mp4',
  'sunset_-_86456 (1080p).mp4',
  'trees_-_111973 (540p).mp4',
  'wave_-_45704 (540p).mp4',
  'waves_-_71122 (1080p).mp4',
  'window_-_106980 (540p).mp4'
];




export const RemotionRoot = () => {
	return (
		<>
		{facts.map((fact, index) => (
				<Composition
						key={index}
						id={`Fact-${index + 1}`}
						component={HelloWorld}
						durationInFrames={450}
						fps={30}
						width={1080}
						height={1920}
						defaultProps={{
							titleText: 'Rich People Facts',
							text1: fact.first,
							text2: fact.last,
							video: videos[index % videos.length],
						}}
				/>
		))}
		</>
	);
};
