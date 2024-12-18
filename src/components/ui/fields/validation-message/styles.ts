import {tv} from 'tailwind-variants';

export const validationMessageStyles = tv({
	base: 'text-sm transition-colors',
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
