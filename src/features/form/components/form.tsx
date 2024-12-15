import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@/components/ui';
import {formSchema} from '../form-schema';
import {FormSchema} from '../types';
import {EmailControl} from './email-control';
import {PasswordControl} from './password-control';
import {useEffect} from 'react';

export const Form: React.FC = () => {
	const {
		control,
		formState: {isSubmitted, isSubmitSuccessful},
		handleSubmit,
		reset,
	} = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	useEffect(
		function resetFormUnSubmit() {
			if (isSubmitSuccessful) {
				reset();
			}
		},
		[isSubmitSuccessful, reset],
	);

	return (
		<form
			className="flex w-full flex-col items-center"
			noValidate
			onSubmit={handleSubmit((data) => {
				alert(JSON.stringify(data, null, 2));
			})}
		>
			<p className="text-xl font-bold">Sign up</p>
			<div className="mt-10 flex w-full flex-col gap-5">
				<EmailControl control={control} errorStateEnabled={isSubmitted} />
				<PasswordControl control={control} errorStateEnabled={isSubmitted} />
			</div>
			<Button className="mt-10">Sign up</Button>
		</form>
	);
};
