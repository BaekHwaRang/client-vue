<script setup>
    import dayjs from "dayjs"
    import {storeToRefs, mapState} from "pinia";
    const store = UserStore();
    const {user} = storeToRefs(store);
</script>
<template>
<section class="notice">
     <div class="page-title">
        <div class="container">
            <h3>상세</h3>
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
                            <input id="title" type="text" name="" placeholder="제목을 입력해주세요." style="flex-grow: 2" v-model="board.title" :disabled="!isEditMode">
                        </div>
                        <div class="label-row">
                            <label for="content">내용</label>
                            <textarea id="content" placeholder="내용을 입력해주세요" v-model="board.content" :disabled="!isEditMode"/>
                        </div>
                        <div class="label-row">
                            <strong style="color: black">조회횟수</strong>
                            <span style="color: black">{{ board.viewCnt }}</span>
                        </div>
                        <div class="label-row">
                            <strong style="color: black">작성날짜</strong>
                            <span style="color: black">{{ dayjs(board.regDate).format('YYYY.MM.DD') }}</span>
                        </div>
                        <div class="label-row">
                            <strong style="color: black">작성자</strong>
                            <span style="color: black">{{ board.regId }}</span>
                        </div>
                        <div class="btn-wrap" style="text-align: right;">
                            <button type="button" @click="$router.back()">이전</button>
                            <button type="button" v-if="isEditAble" @click="boardDelete">삭제</button>
                            <button type="button" v-if="!isEditMode && isEditAble" @click="this.isEditMode = true">편집</button>
                            <button type="button" v-if="isEditMode && isEditAble" @click="boardUpdate">수정</button>
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
    import { UserStore } from "@/stores/sample/userInfo";

    export default {
        data(){
            return {
                board: {},
                isEditAble: false,
                isEditMode: false,
            }
        },
        created(){
            MGW.post(boardInf.addViewCnt, { bno: this.$route.params.bno })
            .then(() => {
                this.getDetail().then((result) => {
                    Object.assign(this, result);
                    this.isEditAble = result.board.regId === this.user.userId;
                })
            });
        },
        computed: {
            ...mapState(UserStore, ['user'])
        },
        methods: {
            getDetail(){
                return MGW.post(boardInf.selectDetail, {
                    bno: this.$route.params.bno
                })
            },
            boardUpdate(){
                MGW.post(boardInf.update, {
                    title: this.board.title,
                    content: this.board.content,
                    bno: this.$route.params.bno,
                })
                .then((result) => {
                    if(result === 1) this.$router.back();
                })
            },
            boardDelete(){
                if(confirm("게시글을 삭제하시겠습니까?")){
                    MGW.post(boardInf.delete, {
                        bno: this.$route.params.bno
                    })
                    .then((result) => {
                        if(result === 1) this.$router.back();
                    })
                }
            }
        }
    }
</script>