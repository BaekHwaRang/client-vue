<template>
    <div style="margin-top: 1.5rem; text-align: center;">
        <RouterLink v-if="groupNumber !== 1" :to="{name: 'boardList', params: {pageNo: 1}}">
            <button type="button" class="btn" style="padding: 0 0.5rem">첫</button>
        </RouterLink>
        <RouterLink v-if="groupNumber !== 1" :to="{name: 'boardList', params: {pageNo: pageNo - pageButtonCnt}}">
            <button type="button" class="btn" style="padding: 0 0.5rem">이전</button>
        </RouterLink>
        <RouterLink v-for="item in buttons" :to="{name: 'boardList', params: {pageNo: item}}">
            <button type="button" class="btn" style="padding: 0 0.5rem;" :style="[ item == pageNo ? 'color: green' : '' ]">{{ item }}</button>
        </RouterLink>
        <RouterLink v-if="!isLast" :to="{name: 'boardList', params: {pageNo: Math.min(pageNo + pageButtonCnt, lastPage)}}">
            <button type="button" class="btn" style="padding: 0 0.5rem">다음</button>
        </RouterLink>
        <RouterLink v-if="!isLast" :to="{name: 'boardList', params: {pageNo: lastPage}}">
            <button type="button" class="btn" style="padding: 0 0.5rem">끝</button>
        </RouterLink>
    </div>
</template>
<script>
    import { RouterLink } from 'vue-router';

    export default {
        props: {
            totalCnt: { // 리스트 총 갯수
                type: Number,
                default: 0
            },
            pageSize: { // 읽어올 페이지 사이즈
                type: Number,
                default: 10
            },
            pageButtonCnt: { // 보여질 버튼의 갯수
                type: Number,
                default: 10
            },
        },
        computed: {
            pageNo(){ // 라우팅 페이지 번호
                return Number(this.$route.params.pageNo) || 1;
            },
            groupNumber(){ // 그룹번호
                return Math.ceil(this.pageNo / this.pageButtonCnt);
            },
            groupStartNumber(){ // 그룹 스타팅 넘버
                return (this.groupNumber - 1) * this.pageButtonCnt + 1
            },
            groupLastNumber(){ // 그룹 라스트 넘버
                return Math.min(this.groupNumber * this.pageButtonCnt, this.lastPage);
            },
            lastPage(){ // 마지막 페이지
                return Math.ceil(this.totalCnt / this.pageSize);
            },
            isLast(){ // 마지막 페이지 여부
                return this.groupLastNumber === this.lastPage;
            },
            buttons(){ // 그려질 버튼번호
                const buttons = [];
                for(let i=this.groupStartNumber; i<=this.groupLastNumber; i++) buttons.push(i);
                return buttons;
            },
        },
    }
</script>