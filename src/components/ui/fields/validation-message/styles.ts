import {tv} from 'tailwind-variants';

export const validationMessageStyles = tv({
	base: 'text-sm',
	variants: {
		state: {
			default: 'text-foreground',
			error: 'text-destructive',
			success: 'text-success',
		},
	},
	defaultVariants: {
		state: 'default',
	},
});
