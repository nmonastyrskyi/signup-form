import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				DEFAULT: 'var(--radius)',
				lg: 'var(--radius-lg)',
			},
			fontSize: {
				sm: ['var(--font-sm)', 'var(--font-line-sm)'],
				xl: ['var(--font-xl)', 'var(--font-line-xl)'],
			},

			colors: {
				'background-top': 'hsl(var(--background-top))',
				'background-bottom': 'hsl(var(--background-bottom))',
				foreground: 'hsl(var(--foreground))',

				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					background: 'hsl(var(--destructive-background))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
				},
				border: 'hsl(var(--border))',
				ring: 'hsl(var(--ring))',

				placeholder: 'hsl(var(--placeholder))',
				'primary-left': 'hsl(var(--primary-left))',
				'primary-right': 'hsl(var(--primary-right))',
			},
		},
	},
	plugins: [
		plugin(function ({matchUtilities, theme}) {
			matchUtilities(
				{
					'svg-color': (value) => ({
						'--tw-svg-color': value,
					}),
				},
				{values: flattenColorPalette(theme('colors'))},
			);
		}),
	],
};
