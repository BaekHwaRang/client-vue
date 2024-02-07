<script setup>
    import {mapState} from 'pinia'
    import {UserStore} from "@/stores/sample/userInfo"
    import dayjs from 'dayjs'
</script>
<template>
<Header/>
<section class="notice">
    <div class="page-title">
        <div class="container">
            <h3>공지사항</h3>
        </div>
    </div>

    <!-- board seach area -->
    <div id="board-search">
        <div class="container">
            <div class="search-window">
                <form>
                    <div class="search-wrap">
                        <label for="search" class="blind">공지사항 내용 검색</label>
                        <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." v-model="filterKeyword"/>
                        <button type="button" class="btn btn-dark" @click="this.getBoardList()">검색</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  <!-- board list area -->
    <div id="board-list">
        <div class="container">
            <div class="pt-10 total">
                <span class="bold">total: {{ totalCount }}</span>
            </div>
            <table class="board-table">
                <thead>
                <tr>
                    <th scope="col" class="th-num">번호</th>
                    <th scope="col" class="th-title">제목</th>
                    <th scope="col" class="th-view-cnt">조회횟수</th>
                    <th scope="col" class="th-date">등록일</th>
                    <th scope="col" class="th-user-id">등록자</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in boardList" @click="pageMove('N', `/board/detail/${item.bno}`)" style="cursor: pointer;">
                        <td>{{item.bno}}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.viewCnt }}</td>
                        <td>{{ dayjs(item.regDate).format('YYYY.MM.DD') }}</td>
                        <td>{{ item.regId }}</td>
                    </tr>
                </tbody>
            </table>
            <PageingButton :pageSize="Number(pageSize)" :totalCnt="totalCount"/>
            <div class="pt-10" style="text-align: right;">
                <button type="button" class="btn" @click="pageMove('Y', '/board/upload')">등록</button>
            </div>
        </div>
    </div>
</section>
</template>
<script>
    import Header from '@/components/sample/Header.vue';
    import { MGW, boardInf } from '@/assets/js/interface';
    import PageingButton from '@/components/sample/PageingButton.vue';
    const pageButtonCnt = 10;
    export default {
        data(){
            return {
                totalCount: 0,
                pageSize: 10,
                boardList: [],
                filterKeyword: '',
                boards: {
                    buttons: [1],
                    pageNo: 1,
                    pageSize: 10,
                    groupNumber: 1,
                    isLast: true,
                    lastPage: 1
                }
            }
        },
        components: {Header, PageingButton},
        created(){
            this.$watch(
                () => this.$route.params.pageNo,
                (toParams, previousParams) => {
                    this.getBoardList().then(this.updateBoardState)
                }
            )
        },
        mounted(){
            this.getBoardList().then(this.updateBoardState);
        },
        computed: {
            ...mapState(UserStore, ['user']),
        },
        methods: {
            getBoardList(){
                const type = 'title';

                return MGW.post(boardInf.selectList, {
                    pageNo: Number(this.$route.params.pageNo) || 1,
                    pageSize: this.pageSize,
                    type,
                    keyword: this.filterKeyword
                });
            },
            updateBoardState(result){
                const {total = 0, pageNo = 1, pageSize = 10, boardList = []} = result;
                this.boardList = boardList;
                this.totalCount = total;

                let buttons = [];
                
                const groupNumber = Math.ceil((pageButtonCnt * pageNo) / (pageButtonCnt * pageSize));
                const groupStartNumber = (groupNumber - 1) * pageSize + 1;
                const lastPage = Math.ceil(total / pageSize);
                const groupLastNumber = Math.min(groupNumber * pageSize, lastPage);

                for(let i=groupStartNumber; i<=groupLastNumber; i++) buttons.push(i);

                this.boards = {
                    buttons,
                    pageNo: result.pageNo,
                    pageSize: result.pageSize,
                    groupStartNumber,
                    groupNumber,
                    isLast: lastPage === groupLastNumber,
                    lastPage
                }
            },
            pageMove(needLoginYn, target){
                if(needLoginYn == 'Y' && this.user == null){
                    alert("로그인이 필요합니다, 로그인 해주세요");
                    this.$router.push("/login");
                    return;
                }

                this.$router.push(target)
            }
        },
    }
</script>