import React, {useState} from 'react';
import {TextField, TextFieldProps} from '../text-field';
import {IconPasswordHidden, IconPasswordShown} from '@/assets/svg';

export const PasswordField: React.FC<TextFieldProps> = (props) => {
	const [showPassword, setShowPassword] = useState(false);

	function togglePasswordVisibility() {
		setShowPassword(!showPassword);
	}

	const togglePasswordLabel = showPassword ? 'Hide password' : 'Show password';

	return (
		<TextField
			type={showPassword ? 'text' : 'password'}
			placeholder="Enter your password"
			rightSlot={
				<button
					onClick={togglePasswordVisibility}
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
