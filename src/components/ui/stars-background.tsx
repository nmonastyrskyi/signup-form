import {FC, useMemo, useState} from 'react';
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

export const StarsBackground: FC = () => {
	const [defaultConfig, setDefaultConfig] = useState(true);
	const [starsCount, setStarsCount] = useState(6);
	const stars = useMemo(() => {
		if (defaultConfig) {
			return defaultStars;
		}

		return generateStars({count: starsCount});
	}, [starsCount, defaultConfig]);

	return (
		<div className="mt-8">
			<div className="flex flex-col gap-4">
				<p>Use custom stars background:</p>
				<label className="flex cursor-pointer items-center gap-2">
					<input
						className="size-4"
						type="checkbox"
						value="defaultConfig"
						checked={!defaultConfig}
						onChange={(e) => {
							setDefaultConfig(!e.target.checked);
						}}
					/>
					Give it a try! :)
				</label>
				{!defaultConfig && (
					<>
						<p>
							Number of stars: <b>{starsCount}</b>
						</p>
						<div className="flex items-center gap-2">
							<span>0</span>
							<input
								className="w-full"
								type="range"
								value={starsCount}
								onChange={(e) => {
									setStarsCount(parseInt(e.target.value));
								}}
								min={0}
								max={50}
							/>
							<span>50</span>
						</div>
					</>
				)}
			</div>
			<div className="absolute  left-0 top-0 -z-10 size-full">
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
		</div>
	);
};
