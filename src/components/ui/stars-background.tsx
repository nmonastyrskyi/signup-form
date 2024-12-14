import {IconStar} from '@/assets/svg';
import {FC} from 'react';

interface StarConfig {
	size: number;
	centerOffset: number;
	top: number;
}

const stars: StarConfig[] = [
	{size: 14, centerOffset: 55, top: 13},
	{size: 14, centerOffset: -73.5, top: 94},
	{size: 21, centerOffset: -111.5, top: 118},
	{size: 27, centerOffset: 119.5, top: 224},
	{size: 27, centerOffset: -97.5, top: 505},
	{size: 21, centerOffset: 93.5, top: 532},
];

export const StarsBackground: FC = () => {
	return (
		<div className="-z-10 w-[315px]">
			{stars.map((star, index) => (
				<IconStar
					key={index}
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
