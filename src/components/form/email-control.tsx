import {Control, useController} from 'react-hook-form';
import {Form} from './form-schema';
import {TextField, ValidationMessage} from '@/components/ui';
import {getInputState} from '@/utils';

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

	return (
		<TextField
			{...emailField}
			state={emailFieldState}
			autoFocus
			type="email"
			placeholder="Email"
			className="w-full"
			validationNode={
				<ValidationMessage onlyErrorState state={emailFieldState}>
					Invalid email address
				</ValidationMessage>
			}
		/>
	);
};
