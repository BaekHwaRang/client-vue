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
                                <input id="title" type="text" name="" placeholder="제목을 입력해주세요." style="flex-grow: 2">
                            </div>
                            <div class="label-row">
                                <label for="content">내용</label>
                                <textarea id="content" placeholder="내용을 입력해주세요" />
                            </div>
                            <div class="btn-wrap" style="text-align: right;">
                                <button type="button">이전</button>
                                <button type="button">등록</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>