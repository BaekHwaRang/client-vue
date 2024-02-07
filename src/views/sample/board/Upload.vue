<script setup>
    import {mapState} from 'pinia'
    import {UserStore} from "@/stores/sample/userInfo"
</script>
<template>
    <section class="notice">
         <div class="page-title">
            <div class="container">
                <h3>등록</h3>
            </div>
        </div>
    
        <!-- board seach area -->
        <div id="board-search">
            <div class="container">
                <div class="search-window">
                    <form>
                        <div class="search-wrap item-row">
                            <div class="label-row">
                                <label for="title" style="flex-grow: 0;">제목</label>
                                <input id="title" type="text" name="" placeholder="제목을 입력해주세요." style="flex-grow: 2" v-model="title">
                            </div>
                            <div class="label-row">
                                <label for="content">내용</label>
                                <textarea id="content" placeholder="내용을 입력해주세요" v-model="content"/>
                            </div>
                            <div class="btn-wrap" style="text-align: right;">
                                <button type="button" @click="$router.back()">이전</button>
                                <button type="button" @click="insertBoard(event)">등록</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { MGW, boardInf } from '@/assets/js/interface';
    export default {
        data(){
            return {
                title: "",
                content: "",
            }
        },
        computed: {
            ...mapState(UserStore, ['user'])
        },
        methods: {
            insertBoard(event){
                console.log(event)
                return MGW.post(boardInf.insert, {
                    title: this.title,
                    content: this.content,
                    regId: this.user.userId
                })
                .then((result) => {
                    if(result === 1){
                        alert("게시판 등록이 완료되었습니다");
                        this.$router.back();
                    }
                })
            }
        }
    }
</script>