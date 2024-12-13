import {tv} from 'tailwind-variants';

export const buttonStyles = tv({
	base: [
		'inline-flex items-center justify-center gap-2',
		'whitespace-nowrap',
		'transition-all',
		'focus-visible:outline-none focus-visible:ring-2',
		'focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50',
		'rounded-lg',
		'min-h-[48px] min-w-[240px] p-2',
		'bg-gradient-to-r from-primary-left to-primary-right text-primary-foreground',
		'focus-visible:shadow-md focus-visible:brightness-105',
		'active:shadow-sm active:brightness-90',
		'hover:shadow-md hover:brightness-105',
	],
});
