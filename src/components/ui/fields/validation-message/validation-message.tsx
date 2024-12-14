import {VariantProps} from 'tailwind-variants';
import {validationMessageStyles} from './styles';
import {FC} from 'react';

interface ValidationMessageProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof validationMessageStyles> {
	children: React.ReactNode;
	onlyErrorState?: boolean;
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
