import React, {useImperativeHandle, useRef, useState} from 'react';
import {TextField, TextFieldProps} from '../text-field';
import {IconPasswordHidden, IconPasswordShown} from '@/assets/svg';
import {assertDefined, assertHTMLInputElement} from '@/utils';

export const PasswordField: React.FC<TextFieldProps> = ({ref, ...props}) => {
	const [showPassword, setShowPassword] = useState(false);

	function togglePasswordVisibility() {
		setShowPassword(!showPassword);
	}

	const togglePasswordLabel = showPassword ? 'Hide password' : 'Show password';

	const inputFieldRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => {
		assertDefined(inputFieldRef.current);
		return inputFieldRef.current;
	});

	return (
		<TextField
			type={showPassword ? 'text' : 'password'}
			ref={inputFieldRef}
			placeholder="Enter your password"
			rightSlot={
				<button
					onClick={(e) => {
						e.stopPropagation();
						const input = inputFieldRef.current;

						assertHTMLInputElement(input);

						input.focus();
						/** Need to wait for the input to receive focus before toggling the password visibility
						 * to prevent the cursor from jumping to the start of the input. */
						setTimeout(() => {
							togglePasswordVisibility();
						});
					}}
					type="button"
					aria-label={togglePasswordLabel}
					title={togglePasswordLabel}
				>
					{showPassword ? <IconPasswordShown /> : <IconPasswordHidden />}
				</button>
			}
			{...props}
		/>
	);
};
