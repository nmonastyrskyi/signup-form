import {ComponentPropsWithoutRef, ElementType, PropsWithChildren} from 'react';
import {buttonStyles} from './styles';
import {type VariantProps} from 'tailwind-variants';

export const defaultElement = 'button';
export type DefaultElement = typeof defaultElement;

export type ButtonProps<E extends ElementType = DefaultElement> = PolymorphicProps<E> &
	VariantProps<typeof buttonStyles> & {
		color?: 'primary' | 'secondary';
	};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>>;

type PolymorphicAsProp<E extends ElementType> = {
	as?: E;
};
