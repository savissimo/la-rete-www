import { loadEnv } from 'vite'
// @ts-check
import { defineConfig } from 'astro/config';

// Determina il mode dai CLI arguments (--mode flag)
const modeIndex = process.argv.indexOf('--mode');
const mode = modeIndex > -1 ? process.argv[modeIndex + 1] : (process.env.NODE_ENV || 'development');

// Carica le env per il mode specificato
const env = loadEnv(mode, process.cwd(), '');

const URL_BASE_PATH = env.URL_BASE_PATH || process.env.URL_BASE_PATH || '/';
const URL_DOMAIN = env.URL_DOMAIN || process.env.URL_DOMAIN || '';
const site = URL_DOMAIN ? `https://${URL_DOMAIN}${URL_BASE_PATH}` : undefined;
console.log(`Config loading with mode: ${mode}`);
console.log('Config values:', { URL_BASE_PATH, URL_DOMAIN, site });

// https://astro.build/config
export default defineConfig({
	base: URL_BASE_PATH,
	site,
	trailingSlash: 'never',
});
