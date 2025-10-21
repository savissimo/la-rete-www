import { loadEnv } from 'vite'
// @ts-check
import { defineConfig } from 'astro/config'

const envvars = loadEnv(process.env.NODE_ENV, process.cwd())
const urlDomain = envvars.URL_DOMAIN
const urlBasePath = envvars.URL_BASE_PATH

// https://astro.build/config
export default defineConfig({
	site: urlDomain ? `https://${urlDomain}` : undefined,
	base: urlBasePath ?? '/',
	trailingSlash: 'never',
})
