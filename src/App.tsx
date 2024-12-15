import {useForm} from 'react-hook-form';
import {Button, StarsBackground} from '@/components/ui';
import {zodResolver} from '@hookform/resolvers/zod';
import {EmailControl, Form, formSchema, PasswordControl} from '@/components/form';

export function App() {
	const {control, formState, handleSubmit} = useForm<Form>({
		resolver: zodResolver(formSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	return (
		<>
			<div className="relative mx-auto flex w-full max-w-[468px] flex-col items-center px-[30px] pt-[94px]">
				<StarsBackground />
				<p className="text-xl font-bold">Sign up</p>
				<form
					className="mt-10 flex w-full flex-col items-center"
					noValidate
					onSubmit={handleSubmit((data) => {
						alert(JSON.stringify(data, null, 2));
					})}
				>
					<div className="flex w-full flex-col gap-5">
						<EmailControl control={control} errorStateEnabled={formState.isSubmitted} />
						<PasswordControl control={control} errorStateEnabled={formState.isSubmitted} />
					</div>
					<Button className="mt-10">Sign Up</Button>
				</form>
			</div>
		</>
	);
}
