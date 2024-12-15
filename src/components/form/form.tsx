import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@/components/ui';
import {formSchema} from './form-schema';
import {FormSchema} from './types';
import {EmailControl} from './email-control';
import {PasswordControl} from './password-control';

export const Form: React.FC = () => {
	const {control, formState, handleSubmit} = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

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
				<EmailControl control={control} errorStateEnabled={formState.isSubmitted} />
				<PasswordControl control={control} errorStateEnabled={formState.isSubmitted} />
			</div>
			<Button className="mt-10">Sign Up</Button>
		</form>
	);
};
