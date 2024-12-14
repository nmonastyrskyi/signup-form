import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
//eslint-disable-next-line import/no-default-export
export default defineConfig({
	base: '/signup-form/',
	plugins: [
		react(),
		tsconfigPaths(),
		svgr({
			svgrOptions: {
				plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
				svgoConfig: {
					floatPrecision: 2,
				},
			},
		}),
	],
});
