import {FC, useMemo} from 'react';
import {IconStar} from '@/assets/svg';

interface StarConfig {
	size: number;
	centerOffset: number;
	top: number;
}

interface GeneratorConfig {
	count: number;
	minSize?: number;
	maxSize?: number;
	maxOffset?: number;
	maxHeight?: number;
}

const getRandomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateStars = ({
	count,
	minSize = 11,
	maxSize = 27,
	maxOffset = window.innerWidth / 2,
	maxHeight = window.innerHeight - maxSize,
}: GeneratorConfig): StarConfig[] => {
	const stars: StarConfig[] = [];
	const verticalStep = maxHeight / count;

	for (let i = 0; i < count; i++) {
		stars.push({
			size: getRandomNumber(minSize, maxSize),
			centerOffset: getRandomNumber(-maxOffset, maxOffset),
			top: getRandomNumber(i * verticalStep, (i + 1) * verticalStep),
		});
	}

	return stars;
};

const defaultStars: StarConfig[] = [
	{size: 14, centerOffset: 55, top: 13},
	{size: 14, centerOffset: -73.5, top: 94},
	{size: 21, centerOffset: -111.5, top: 118},
	{size: 27, centerOffset: 119.5, top: 224},
	{size: 27, centerOffset: -97.5, top: 505},
	{size: 21, centerOffset: 93.5, top: 532},
];

interface StarsBackgroundProps {
	starCount?: number;
	defaultConfig?: boolean;
}

export const StarsBackground: FC<StarsBackgroundProps> = ({defaultConfig, starCount = 6}) => {
	const stars = useMemo(() => {
		if (defaultConfig) {
			return defaultStars;
		}

		return generateStars({count: starCount});
	}, [starCount, defaultConfig]);

	return (
		<div className="-z-10">
			{stars.map((star, index) => (
				<IconStar
					key={index}
					aria-hidden
					className="absolute"
					style={{
						width: star.size,
						height: star.size,
						left: `calc(50% + ${star.centerOffset}px)`,
						top: `${star.top}px`,
					}}
				/>
			))}
		</div>
	);
};
