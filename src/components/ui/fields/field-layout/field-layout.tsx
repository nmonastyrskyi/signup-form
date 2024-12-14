import React, {FC} from 'react';
import {FieldFrame, FieldFrameProps} from '../field-frame/field-frame';

export interface FieldLayoutProps extends FieldFrameProps {
	validationNode?: React.ReactNode;
}

export const FieldLayout: FC<FieldLayoutProps> = ({validationNode, ...props}) => {
	return (
		<div>
			<FieldFrame {...props} />
			{validationNode && <div className="flex flex-col gap-1 pl-5 pt-2">{validationNode}</div>}
		</div>
	);
};
