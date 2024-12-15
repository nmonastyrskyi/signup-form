import React, {FC} from 'react';
import {PASSWORD_REQUIREMENTS} from './constants';

export const AriaPasswordRequirements: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div className="sr-only" {...props}>
			<label>validation rules:</label>
			<ul>
				{PASSWORD_REQUIREMENTS.map((requirement) => (
					<li key={requirement.id}>{requirement.message};</li>
				))}
			</ul>
		</div>
	);
};
