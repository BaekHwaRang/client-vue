<script setup>
    import {UserStore} from "@/stores/sample/userInfo"
    import { storeToRefs } from "pinia";
    const store = UserStore();
    const {user} = storeToRefs(store);
    const {logout} = store;
</script>
<template>
    <header>
        <div class="btn-wrap" style="text-align: right; margin-right: 5rem;">
            <RouterLink to="/regist" v-if="user == null">
                <button type="button">회원가입</button>
            </RouterLink>
            <RouterLink to="/login" v-if="user == null">
                <button type="button">로그인</button>
            </RouterLink>
            <button type="button" @click="logout()" v-if="user != null">로그아웃</button>
        </div>
    </header>
</template>
<script>
    export default {

    }
</script>