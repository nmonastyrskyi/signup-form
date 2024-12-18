import {Form} from '@/features/form';
import {StarsBackground} from '@/components/ui';

export function App() {
	return (
		<div className="relative mx-auto flex size-full max-w-[468px] flex-col items-center px-[30px] pt-[94px]">
			<StarsBackground />
			<Form />
		</div>
	);
}
