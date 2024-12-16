import {Control, useController, useWatch} from 'react-hook-form';
import {PasswordField} from '@/components/ui';
import {FormSchema} from '../types';
import {getInputState} from '../utils';
import {useId} from 'react';
import {AriaPasswordRequirements} from './aria-password-requirements';
import {PasswordValidationMessages} from './password-validation-messages';
import {PASWORD_FIELD_MAX_LENGTH} from '../constants';
import {assertHTMLInputElement} from '@/utils';

interface PasswordControlProps {
	control: Control<FormSchema>;
	errorStateEnabled?: boolean;
}

export const PasswordControl = ({control, errorStateEnabled}: PasswordControlProps) => {
	const {
		field: passwordField,
		fieldState: {invalid, isTouched, isDirty},
	} = useController({
		name: 'password',
		control,
	});

	const fieldState = getInputState({invalid}, {errorStateEnabled, successStateEnabled: isTouched});

	const password = useWatch({
		name: 'password',
		control,
	});

	const validationErrorId = useId();
	const validationRequirementsId = useId();

	return (
		<>
			<AriaPasswordRequirements id={validationRequirementsId} />
			<PasswordField
				{...passwordField}
				required
				maxLength={PASWORD_FIELD_MAX_LENGTH}
				onChange={(e) => {
					assertHTMLInputElement(e.target);
					//Need to slice the value because maxLength attribute doesn't work when value is pasted from clipboard
					passwordField.onChange(e.target.value.slice(0, PASWORD_FIELD_MAX_LENGTH));
				}}
				onKeyDown={(e) => {
					if (e.key === ' ') {
						e.preventDefault();
					}
				}}
				state={fieldState}
				placeholder="Create your password"
				aria-label="Password"
				aria-errormessage={validationErrorId}
				//Need for invalid state as well, because aria-errormessage is not widely supported
				aria-describedby={fieldState === 'error' ? validationErrorId : validationRequirementsId}
				className="w-full"
				validationNode={
					<PasswordValidationMessages
						password={password}
						successStateEnabled={isDirty}
						errorStateEnabled={errorStateEnabled}
						id={validationErrorId}
					/>
				}
			/>
		</>
	);
};
