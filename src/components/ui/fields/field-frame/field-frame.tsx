import React, {FC} from 'react';
import {fieldFrameStyles} from './styles';
import {VariantProps} from 'tailwind-variants';

export type FieldFrameProps = React.HTMLAttributes<HTMLDivElement> & DistinctFieldFrameProps;

export interface DistinctFieldFrameProps extends VariantProps<typeof fieldFrameStyles> {
	rightSlot?: React.ReactNode;
}

export const FieldFrame: FC<FieldFrameProps> = ({className, state, rightSlot, children, ...props}) => {
	const {base: baseStyles, rightSlot: rightSlotStyles} = fieldFrameStyles({
		className,
		state,
	});
	return (
		<div className={baseStyles({state})} {...props}>
			{children}
			{rightSlot && <div className={rightSlotStyles()}>{rightSlot}</div>}
		</div>
	);
};
