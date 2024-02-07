<template>
<header>
    <div class="btn-wrap" style="text-align: right; margin-right: 5rem;">
        <button type="button">회원가입</button>
        <button type="button">로그인</button>
        <button type="button">로그아웃</button>
    </div>
</header>
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
                        <input id="search" type="search" name="" placeholder="검색어를 입력해주세요."/>
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
                <span class="bold">total: 1</span>
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
                    <tr style="cursor: pointer;">
                        <td>1</td>
                        <td>샘플</td>
                        <td>0</td>
                        <td>2024.02.07</td>
                        <td>user</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 1.5rem; text-align: center;">
                <button type="button" class="btn" style="padding: 0 0.5rem">첫</button>
                <button type="button" class="btn" style="padding: 0 0.5rem">이전</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">1</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">2</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">3</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">4</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">5</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">6</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">7</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">8</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">9</button>
                <button type="button" class="btn" style="padding: 0 0.5rem;">10</button>
                <button type="button" class="btn" style="padding: 0 0.5rem">다음</button>
                <button type="button" class="btn" style="padding: 0 0.5rem">끝</button>
            </div>
            <div class="pt-10" style="text-align: right;">
                <button type="button" class="btn">등록</button>
            </div>
        </div>
    </div>
</section>
</template>