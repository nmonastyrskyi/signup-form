import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui';
import {zodResolver} from '@hookform/resolvers/zod';
import {EmailControl, Form, formSchema, PasswordControl} from '@/components/form';

export function App() {
	const {control, formState, handleSubmit} = useForm<Form>({
		resolver: zodResolver(formSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	return (
		<div className="mx-auto mt-[94px] flex flex-col items-center">
			<p className="text-xl font-bold">Sign Up</p>
			<form
				className="mt-10 flex  w-full max-w-screen-sm flex-col items-center"
				noValidate
				onSubmit={handleSubmit((data) => {
					console.log(data);
				})}
			>
				<div className="flex w-full flex-col gap-5">
					<EmailControl control={control} errorStateEnabled={formState.isSubmitted} />
					<PasswordControl control={control} errorStateEnabled={formState.isSubmitted} />
				</div>
				<Button className="mt-10">Sign Up</Button>
			</form>
		</div>
	);
}
