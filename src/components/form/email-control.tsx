import {Control, useController} from 'react-hook-form';
import {Form} from './form-schema';
import {TextField, ValidationMessage} from '@/components/ui';
import {getInputState} from '@/utils';
import {useId} from 'react';

interface EmailControlProps {
	control: Control<Form>;
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
			state={emailFieldState}
			autoFocus
			type="email"
			placeholder="Email"
			className="w-full"
			aria-errormessage={validationErrorId}
			validationNode={
				<ValidationMessage onlyErrorState id={validationErrorId} state={emailFieldState}>
					Invalid email address
				</ValidationMessage>
			}
		/>
	);
};
