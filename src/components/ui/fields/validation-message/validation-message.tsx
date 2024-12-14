import {VariantProps} from 'tailwind-variants';
import {validationMessageStyles} from './styles';
import {FC, Ref} from 'react';

export interface ValidationMessageProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof validationMessageStyles> {
	children: React.ReactNode;
	onlyErrorState?: boolean;
	ref?: Ref<HTMLParagraphElement>;
}

export const ValidationMessage: FC<ValidationMessageProps> = ({
	className,
	state,
	children,
	onlyErrorState,
	...props
}) => {
	if (state !== 'error' && onlyErrorState) {
		return null;
	}

	return (
		<p className={validationMessageStyles({className, state})} {...props}>
			{children}
		</p>
	);
};
