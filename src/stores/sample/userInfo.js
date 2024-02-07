import {ref} from 'vue'
import {defineStore} from 'pinia'

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
    {persist: true}
)