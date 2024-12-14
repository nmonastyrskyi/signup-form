import {FC, useRef, useImperativeHandle} from 'react';
import {FieldFrame} from '../field-frame';
import {Input, InputProps} from '../input';
import {DistinctFieldFrameProps} from '../field-frame/field-frame';
import {assertDefined} from '@/utils';

export type TextFieldProps = InputProps & DistinctFieldFrameProps;

export const TextField: FC<TextFieldProps> = ({className, rightSlot, state, ref, ...props}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => {
		assertDefined(inputRef.current);
		return inputRef.current;
	});

	return (
		<FieldFrame state={state} rightSlot={rightSlot} className={className} onClick={() => inputRef.current?.focus()}>
			<Input {...props} ref={inputRef} className="flex-auto" />
		</FieldFrame>
	);
};
