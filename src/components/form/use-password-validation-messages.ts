import {useMemo} from 'react';
import {partialRight} from 'lodash-es';
import {ValidationMessageProps} from '@/components/ui';
import {getInputState, GetInputStateOptionalParams, validatePassword} from '@/utils';
import {PASSWORD_REQUIREMENTS} from './constants';

interface UseValidationMessageParams extends GetInputStateOptionalParams {
	password: string;
}

export function usePasswordValidationMessages({
	password,
	errorStateEnabled,
	successStateEnabled,
}: UseValidationMessageParams): ValidationMessageProps[] {
	return useMemo(() => {
		const validationResults = validatePassword(password);
		const getValidationState = partialRight(getInputState, {errorStateEnabled, successStateEnabled});

		return PASSWORD_REQUIREMENTS.map((requirement) => ({
			state: getValidationState({invalid: !validationResults[requirement.id]}),
			children: requirement.message,
		}));
	}, [password, errorStateEnabled, successStateEnabled]);
}
