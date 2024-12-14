import {ValidationMessage, ValidationMessageProps} from '@/components/ui';
import {getInputState, GetInputStateOptionalParams, validatePassword} from '@/utils';
import {partialRight} from 'lodash-es';
import {FC, HTMLAttributes, useMemo} from 'react';

// Validate the password against individual rules

interface PasswordValidatorProps extends GetInputStateOptionalParams, HTMLAttributes<HTMLDivElement> {
	password: string;
}

export const PasswordValidator: FC<PasswordValidatorProps> = ({
	password,
	errorStateEnabled,
	successStateEnabled,
	...props
}) => {
	const messages: ValidationMessageProps[] = useMemo(() => {
		const validationResults = validatePassword(password);
		const getValidationState = partialRight(getInputState, {errorStateEnabled, successStateEnabled});

		const states = {
			minLength: getValidationState({invalid: !validationResults.minLength}),
			mixedCases: getValidationState({invalid: !validationResults.mixedCases}),
			digit: getValidationState({invalid: !validationResults.digit}),
		};

		return [
			{
				children: '8 characters or more (no spaces)',
				state: states.minLength,
				'aria-disabled': states.digit !== 'error',
			},
			{
				children: 'Uppercase and lowercase letters',
				state: states.mixedCases,
				'aria-disabled': states.mixedCases !== 'error',
			},
			{
				children: 'At least one digit',
				state: states.digit,
				'aria-disabled': states.digit !== 'error',
			},
		];
	}, [errorStateEnabled, password, successStateEnabled]);

	return (
		<div className="flex flex-col gap-1" aria-live="assertive" {...props}>
			{messages.map((message, index) => (
				<ValidationMessage key={index} {...message} />
			))}
		</div>
	);
};
