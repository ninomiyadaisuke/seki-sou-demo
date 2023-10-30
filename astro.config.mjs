import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	server: { port: 3000, host: true },
	output: 'server',
	adapter: vercel(),
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
				'@layouts': '/src/layouts',
				'@styles': '/src/styles',
				'@assets': '/src/assets',
				'@libs': '/src/libs'
			}
		}
	}
});
