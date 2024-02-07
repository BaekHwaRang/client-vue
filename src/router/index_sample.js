import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const router = createRouter({
	//history: createWebHistory(import.meta.env.BASE_URL), // 히스토리모드 프로토콜://도메인/지정패스 -> 순수 react, vue와 같은경우 서버에서 모든 패스를 index.html을 결과로 보내줘야만 페이지가 불러와짐
    history: createWebHashHistory(import.meta.env.BASE_URL), // 해쉬모드 프로토콜://도메인/#/패스 -> 해쉬모드이기 때문에 해쉬로 들어간 모든 패스는 루트경로로 들어감
	routes: [
		{
			path: '/',
			name: 'home',
			component: Main, // build시 결과 파일이 혼합된다. index-[hash].js 에 컴포넌트에 대한 내용을 포함한 상태로 빌드된다.
			//component: () => import("@/views/Main.vue"), // lazyLoading, File Chunk 해당 경로 진입 시 스크립트를 웹 서버에서 불러오며 빌드 시 Main-[hash].js 로 결과물을 분리 시킨다.
			// 차이점: js 파일 분리에 따라 첫 페이지 로딩의 속도, 코드관리 차원 무조건 분리시키는게 나음 정적 import 할때마다 import 파일에 내용 다 포함
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
			component: () => import("@/views/sample/board/Board.vue"), // parameter url 포함
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
			component: () => import("@/views/Error404.vue") // 라우팅 비매칭시 오류 페이지
		},
	]
})

export default router;