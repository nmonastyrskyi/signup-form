import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
//eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
});
