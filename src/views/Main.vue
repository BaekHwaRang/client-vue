<script setup>
</script>
<template>
    <RouterLink to="/board">
    <button class="btn">
        공지사항
    </button>
    </RouterLink>
</template>
<script>
    import Board from './board/Board.vue';
    export default {
        components: {Board}
    }
</script>