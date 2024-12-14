import {ValidationMessageProps} from '@/components/ui';
import {getInputState, GetInputStateOptionalParams, validatePassword} from '@/utils';
import {partialRight} from 'lodash-es';
import {useMemo} from 'react';

interface UseValidationMessageParams extends GetInputStateOptionalParams {
	password: string;
}
export function usePasswordValidationHints({
	password,
	errorStateEnabled,
	successStateEnabled,
}: UseValidationMessageParams): ValidationMessageProps[] {
	return useMemo(() => {
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
}
