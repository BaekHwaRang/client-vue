<script setup>
    import {mapActions} from 'pinia'
    import {UserStore} from "@/stores/sample/userInfo"
    import { MGW, userInf } from '@/assets/js/interface';

	const store = UserStore();
	const {login, logout} = store;
</script>
<template>
    <section class="notice">
        <div class="page-title">
            <div class="container">
                <h3>로그인</h3>
            </div>
        </div>
        <div id="board-search">
            <div class="container">
                <div class="search-window">
                    <form>
                        <div class="item-row center" style="padding: 0 20vw">
                            <div class="label-row">
                                <label for="userId" style="color: black flex-grow: 1;">회원 아이디</label>
                                <input type="text" id="userId" placeholder="아이디를 입력하세요" style="flex-grow:2;" v-model="userId"/>
                            </div>
                            <div class="label-row">
                                <label for="password" style="color: black flex-grow: 1;">비밀번호</label>
                                <input type="text" id="password" placeholder="비밀번호를 입력하세요" style="flex-grow:2;" v-model="password"/>
                            </div>
                            <div class="btn-wrap" style="text-align: right;">
                                <button type="button" @click="$router.back()">이전</button>
                                <button type="button" @click="tryLogin()">로그인</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data(){
            return {userId: "", password: ""}
        },
        methods: {
            ...mapActions(UserStore, ['login']),
            tryLogin(){
                MGW.post(userInf.login, {
                    userId: this.userId, password: this.password
                })
                .then((result) => {
                    if(result.resultCode == 200){
                        alert("로그인 성공");
                        this.login({
                            userId: this.userId,
                            userNm: result.userNm
                        });
                        this.$router.back();
                    }else{
                        alert("로그인 실패");
                    }
                })
            }
        }
    }
</script>