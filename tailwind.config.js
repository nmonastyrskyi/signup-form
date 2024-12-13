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
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				ring: 'hsl(var(--ring))',

				'primary-left': 'hsl(var(--primary-left))',
				'primary-right': 'hsl(var(--primary-right))',
			},
		},
	},
};
