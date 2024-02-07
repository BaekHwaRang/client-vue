import {ref} from 'vue'
import {defineStore} from 'pinia'

/* 전역 상태 react의 redux와 같음 */
export const UserStore = defineStore(
    "user", 
    () => {
        const user = ref(null);
        function login(userInfo){
            user.value = {...userInfo};
        }
        function logout(){
            user.value = null;
        }
        return {user, login, logout};
    },
    {persist: {
        storage:sessionStorage
    }} // 세션 스토리지 저장
)