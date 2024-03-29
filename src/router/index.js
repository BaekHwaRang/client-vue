import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
	//history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import("@/views/Main.vue"),
		},
	]
})

export default router
