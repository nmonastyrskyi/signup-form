import {FC, useRef, useImperativeHandle} from 'react';
import {Input, InputProps} from '../input';
import {FieldLayoutProps, FieldLayout} from '../field-layout';
import {assertDefined} from '@/utils';

export type TextFieldProps = InputProps & FieldLayoutProps;

export const TextField: FC<TextFieldProps> = ({className, rightSlot, validationNode, state, ref, ...props}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => {
		assertDefined(inputRef.current);
		return inputRef.current;
	});

	return (
		<FieldLayout
			validationNode={validationNode}
			state={state}
			rightSlot={rightSlot}
			className={className}
			onClick={() => inputRef.current?.focus()}
		>
			<Input {...props} ref={inputRef} className="flex-auto" />
		</FieldLayout>
	);
};
