import { defineConfig, loadEnv } from 'vite';
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [react(), svgr()],
		define: {
			'process.env': {
				API_URL: env.API_URL,
			},
		},
		resolve: {
			alias: {
				'@shared': '/src/shared',
				'@entities': '/src/entities',
				'@features': '/src/features',
				'@widgets': '/src/widgets',
				'@pages': '/src/pages',
				'@app': '/src/app',
			},
		},
		server: {
			port: 3000,
		},
	};
});
