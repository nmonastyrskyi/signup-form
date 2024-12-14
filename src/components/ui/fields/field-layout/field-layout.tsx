import React, {FC} from 'react';
import {FieldFrame, FieldFrameProps} from '../field-frame/field-frame';
import {useAutoAnimate} from '@formkit/auto-animate/react';
export interface FieldLayoutProps extends FieldFrameProps {
	validationNode?: React.ReactNode;
}

export const FieldLayout: FC<FieldLayoutProps> = ({validationNode, ...props}) => {
	const [parent] = useAutoAnimate();

	return (
		<div>
			<FieldFrame {...props} />
			{validationNode && (
				<div ref={parent} className="flex flex-col gap-1 pl-5 pt-2">
					{validationNode}
				</div>
			)}
		</div>
	);
};
