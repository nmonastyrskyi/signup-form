import {ValidationMessage} from '@/components/ui';
import {GetInputStateOptionalParams} from '../utils';
import {FC, HTMLAttributes} from 'react';
import {usePasswordValidationMessages} from '../hooks/use-password-validation-messages';

interface PasswordValidationMessagesProps extends GetInputStateOptionalParams, HTMLAttributes<HTMLDivElement> {
	password: string;
}

export const PasswordValidationMessages: FC<PasswordValidationMessagesProps> = ({
	password,
	errorStateEnabled,
	successStateEnabled,
	...props
}) => {
	const validationMessages = usePasswordValidationMessages({password, errorStateEnabled, successStateEnabled});

	return (
		<div className="flex flex-col gap-1" {...props} aria-live="assertive" role="alert">
			{validationMessages.map((hint, index) => (
				<ValidationMessage key={index} {...hint} />
			))}
		</div>
	);
};
