import {ElementType} from 'react';
import {ButtonProps, defaultElement, DefaultElement} from './types';
import {buttonStyles} from './styles';

function Button<E extends ElementType = DefaultElement>({className, as, ...props}: ButtonProps<E>) {
	const Component = as ?? defaultElement;

	return <Component className={buttonStyles({className})} {...props} />;
}

export {Button};
