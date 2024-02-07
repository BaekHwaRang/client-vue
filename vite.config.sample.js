import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import {createHtmlPlugin} from "vite-plugin-html"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		// 샘플용 경로 틀기
		createHtmlPlugin({
			template: "index_sample.html",
			entry: "src/main_sample.js"
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	// dev모드 게이트웨이 프록시 서버 cors
	server: {
		cors: false,
		proxy: {
			'/mgw': {
				target: "http://192.168.100.88:8080",
				changeOrigin: true,
			}
		}
	}
})
