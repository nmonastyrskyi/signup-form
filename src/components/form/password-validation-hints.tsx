import {ValidationMessage} from '@/components/ui';
import {GetInputStateOptionalParams} from '@/utils';
import {FC, HTMLAttributes} from 'react';
import {usePasswordValidationHints} from './use-pasword-validation-hints';

interface PasswordValidationHintsProps extends GetInputStateOptionalParams, HTMLAttributes<HTMLDivElement> {
	password: string;
}

export const PasswordValidationHints: FC<PasswordValidationHintsProps> = ({
	password,
	errorStateEnabled,
	successStateEnabled,
	...props
}) => {
	const hints = usePasswordValidationHints({password, errorStateEnabled, successStateEnabled});

	return (
		<div className="flex flex-col gap-1" aria-live="assertive" {...props}>
			{hints.map((hint, index) => (
				<ValidationMessage key={index} {...hint} />
			))}
		</div>
	);
};
