import {Control, useController} from 'react-hook-form';
import {FormSchema} from './types';
import {TextField, ValidationMessage} from '@/components/ui';
import {getInputState} from '@/utils';
import {useId} from 'react';

interface EmailControlProps {
	control: Control<FormSchema>;
	errorStateEnabled?: boolean;
}
export const EmailControl = ({control, errorStateEnabled}: EmailControlProps) => {
	const {
		field: emailField,
		fieldState: {invalid: emailIsInvalid, isTouched: emailIsTouched},
	} = useController({
		name: 'email',
		control,
	});

	const emailFieldState = getInputState(
		{invalid: emailIsInvalid},
		{successStateEnabled: emailIsTouched, errorStateEnabled},
	);

	const validationErrorId = useId();

	return (
		<TextField
			{...emailField}
			required
			state={emailFieldState}
			autoFocus
			type="email"
			placeholder="Email"
			aria-label="Email"
			className="w-full"
			aria-errormessage={validationErrorId}
			//Need for invalid state as well, because aria-errormessage is not widely supported
			aria-describedby={emailIsInvalid ? validationErrorId : undefined}
			validationNode={
				<ValidationMessage onlyErrorState id={validationErrorId} state={emailFieldState}>
					Invalid email address
				</ValidationMessage>
			}
		/>
	);
};
