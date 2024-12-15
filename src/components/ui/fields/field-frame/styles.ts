import {tv} from 'tailwind-variants';

export const fieldFrameStyles = tv({
	base: ['flex cursor-text rounded border bg-white  px-5 py-3 transition-colors', 'focus-within:border-border'],
	slots: {
		rightSlot: ['ml-2 flex cursor-pointer items-center'],
	},
	variants: {
		state: {
			default: 'border-transparent svg-color-placeholder focus-within:svg-color-current',
			error:
				'border border-destructive bg-destructive-background text-destructive svg-color-current focus-within:border-destructive',
			success: 'border-success text-success svg-color-current focus-within:border-success',
		},
	},
	defaultVariants: {
		state: 'default',
	},
});
