import {ValidationMessage} from '@/components/ui';
import {getInputState, GetInputStateOptionalParams, validatePassword} from '@/utils';
import {partialRight} from 'lodash-es';
import {FC} from 'react';

// Validate the password against individual rules

interface PasswordValidatorProps extends GetInputStateOptionalParams {
	password: string;
}

export const PasswordValidator: FC<PasswordValidatorProps> = ({password, errorStateEnabled, successStateEnabled}) => {
	const validationResults = validatePassword(password);
	const getValidationState = partialRight(getInputState, {errorStateEnabled, successStateEnabled});

	return (
		<div className="flex flex-col gap-1">
			<ValidationMessage state={getValidationState({invalid: !validationResults.minLength})}>
				8 characters or more (no spaces)
			</ValidationMessage>
			<ValidationMessage state={getValidationState({invalid: !validationResults.mixedCases})}>
				Uppercase and lowercase letters
			</ValidationMessage>
			<ValidationMessage state={getValidationState({invalid: !validationResults.digit})}>
				At least one digit
			</ValidationMessage>
		</div>
	);
};
