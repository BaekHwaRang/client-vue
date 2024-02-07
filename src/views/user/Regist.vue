<template>
 <section class="notice">
  <div class="page-title">
        <div class="container">
            <h3>회원가입</h3>
        </div>
    </div>

    <!-- board seach area -->
    <div id="board-search">
        <div class="container">
            <div class="search-window">
                <form>
                    <div class="item-row center" style="padding: 0 20vw">
                        <div class="label-row">
                            <label for="userId" style="color: black flex-grow: 1;">회원 아이디</label>
                            <input type="text" id="userId" placeholder="아이디를 입력하세요" style="flex-grow:2;"/>
                        </div>
                        <div class="label-row">
                            <label for="userNm" style="color: black flex-grow: 1;">회원명</label>
                            <input type="text" id="userNm" placeholder="회원명 입력하세요" style="flex-grow:2;"/>
                        </div>
                        <div class="label-row">
                            <label for="password" style="color: black flex-grow: 1;">비밀번호</label>
                            <input type="text" id="password" placeholder="비밀번호를 입력하세요" style="flex-grow:2;"/>
                        </div>
                        <div class="btn-wrap" style="text-align: right;">
                            <button type="button">이전</button>
                            <button type="button">회원가입</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>