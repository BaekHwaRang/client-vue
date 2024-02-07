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
		{
			path: "/regist",
			name: "regist",
			component: () => import("@/views/sample/user/Regist.vue")
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/sample/user/Login.vue")
		},
		{
			path: "/board/:pageNo?",
			name: "boardList",
			component: () => import("@/views/sample/board/Board.vue"),
		},
		{
			path: "/board/upload/:bno?",
			name: "boardUpload",
			component: () => import("@/views/sample/board/Upload.vue"),
		},
		{
			path: "/board/detail/:bno?",
			name: "boardDetail",
			component: () => import("@/views/sample/board/Detail.vue")
		},
		{
			path: "/:pathMatch(.*)*",
			component: () => import("@/views/Error404.vue")
		},
	]
})

export default router;