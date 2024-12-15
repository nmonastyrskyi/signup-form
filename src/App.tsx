import {StarsBackground} from '@/components/ui';
import {Form} from '@/components/form';

export function App() {
	return (
		<div className="relative mx-auto flex w-full max-w-[468px] flex-col items-center px-[30px] pt-[94px]">
			<StarsBackground starCount={10} />
			<Form />
		</div>
	);
}
