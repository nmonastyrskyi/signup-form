import {PasswordField, TextField, Button} from '@/components/ui';
export function App() {
	return (
		<div className="mx-auto mt-[94px] flex flex-col items-center">
			<p className="text-xl font-bold">Sign Up</p>
			<form className="mt-10 flex  w-full max-w-screen-sm flex-col items-center">
				<div className="flex w-full flex-col gap-5">
					<TextField placeholder="Email" className="w-full" />
					<PasswordField placeholder="Create your password" className="w-full" />
				</div>
				<Button className="mt-10">Sign Up</Button>
			</form>
		</div>
	);
}
