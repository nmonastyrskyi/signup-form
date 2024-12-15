import {VariantProps} from 'tailwind-variants';
import {validationMessageStyles} from './styles';
import {FC, Ref} from 'react';

export interface ValidationMessageProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof validationMessageStyles> {
	children: React.ReactNode;
	ariaName?: string;
	onlyErrorState?: boolean;
	ref?: Ref<HTMLParagraphElement>;
}

export const ValidationMessage: FC<ValidationMessageProps> = ({
	className,
	state,
	children,
	onlyErrorState,
	id,
	...props
}) => {
	if (state !== 'error' && onlyErrorState) {
		return null;
	}

	return (
		<>
			<p className={validationMessageStyles({className, state})} aria-hidden {...props}>
				{children}
			</p>
			{state === 'error' && (
				<p className="sr-only" aria-live="assertive" role="alert" id={id}>
					input requirement not met: {children}.
				</p>
			)}
		</>
	);
};
