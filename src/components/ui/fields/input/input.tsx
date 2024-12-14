import {FC, Ref} from 'react';
import {inputStyles} from './styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({className, ...props}) => {
	return <input className={inputStyles({className})} {...props} />;
};
