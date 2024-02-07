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
            totalCnt: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            },
            pageButtonCnt: {
                type: Number,
                default: 10
            },
        },
        computed: {
            pageNo(){
                return Number(this.$route.params.pageNo) || 1;
            },
            groupNumber(){
                return Math.ceil((this.pageButtonCnt * this.pageNo) / (this.pageButtonCnt * this.pageSize));
            },
            groupStartNumber(){
                return (this.groupNumber - 1) * this.pageSize + 1;
            },
            groupLastNumber(){
                return Math.min(this.groupNumber * this.pageSize, this.lastPage);
            },
            lastPage(){
                return Math.ceil(this.totalCnt / this.pageSize);
            },
            isLast(){
                return this.groupLastNumber === this.lastPage;
            },
            buttons(){
                const buttons = [];
                for(let i=this.groupStartNumber; i<=this.groupLastNumber; i++) buttons.push(i);
                return buttons;
            },
        },
    }
</script>