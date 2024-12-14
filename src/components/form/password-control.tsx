import {Control, useController, useWatch} from 'react-hook-form';
import {PasswordValidator} from './password-validator';
import {PasswordField} from '@/components/ui';
import {Form} from './form-schema';
import {getInputState} from '@/utils';

interface PasswordControlProps {
	control: Control<Form>;
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

	return (
		<PasswordField
			{...passwordField}
			onKeyDown={(e) => {
				if (e.key === ' ') {
					e.preventDefault();
				}
			}}
			state={fieldState}
			placeholder="Create your password"
			className="w-full"
			validationNode={
				<PasswordValidator password={password} successStateEnabled={isDirty} errorStateEnabled={isTouched && isDirty} />
			}
		/>
	);
};
