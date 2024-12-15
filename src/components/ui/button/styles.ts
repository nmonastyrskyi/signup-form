import {tv} from 'tailwind-variants';

export const buttonStyles = tv({
	base: [
		'inline-flex items-center justify-center gap-2',
		'whitespace-nowrap font-bold',
		'rounded-lg',
		'transition-all',
		'disabled:pointer-events-none disabled:opacity-50',
		'min-h-[48px] min-w-[240px] p-2',
		'bg-gradient-to-r from-primary-left to-primary-right text-primary-foreground',
		'active:shadow-sm active:brightness-90',
		'hover:shadow-md hover:brightness-105',
		'focus-visible:shadow-md focus-visible:brightness-105',
		'focus-visible:outline-none focus-visible:ring-2',
		'focus-visible:ring-ring focus-visible:ring-offset-2',
	],
});
