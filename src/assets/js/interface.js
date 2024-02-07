import axios from "axios";

const CONTEXT_PATH = "/mgw";
const SERVER_PATH = `${CONTEXT_PATH}/api`

export const boardInf = {
    selectList: `/board/getBoardList`,
    selectDetail: `/board/getDetail`,
    insert: `/board/add`,
    update: `/board/edit`,
    delete: `/board/delete`,
    addViewCnt: '/board/addViewCnt'
}

export const userInf = {
    regist: `/regist`,
    login: `/login`,
}

// 모피어스 게이트웨이 MGW 서버의 헤더 규격
const MGW = axios.create({
    baseURL: `${SERVER_PATH}`,
    headers: {
        "Content-Type": "application/json;",
        "responseHeader": false, // 커스텀 헤더 요청 true -> 원본 response.data, false -> response.data.body
    },
    responseType: "json",
})

// 
/* 
    *모피어스 통신 데이터 규격에 맞춤 
    !POST 형식의 body 결과값엔  { "head": {}, "body": {} } 형태로 주고 받게 약속 되어있음
    head 사용자정보 네이티브에서 디바이스 정보나 그외의 정보를 담아서 넘겨줌
    body 그외의 비즈니스 정보를 넘겨줌

    네이티브로 통신할 때는 axios가 아닌 모피어스 API
    M.net.http.send 함수 사용
    export const MNet = {
        httpSend(params){
            return new Promise((resolve, reject) => {
                const {path, data, userData} = params;
                M.net.http.send({
                    server: "DEV",
                    path,
                    method: "POST",
                    data, // 이곳의 객체는 네이티브에서 body로 넣어줌
                    userData, // 네이티브에서 head에 추가해줌
                    success: resolve,
                    error: reject
                })
            })
        },
        socketSend(){

        }
    }
*/

MGW.interceptors.request.use((config) => {
    const {data} = config;
    const standard = {head:{}, body: {}};
    if(data instanceof Object){
        const {head, body, ...args} = data;
        if(head instanceof Object === false) standard.head = {};
        else standard.head = {...head};
        if(data.hasOwnProperty("body") === false) standard.body = {...args};
        else standard.body = {...body};
    }else{
        standard.body = {...data};
    }

    config.data = standard;
    return config;
});

// 모피어스 결과 값
MGW.interceptors.response.use(
    (response) => response.config.headers.responseHeader ? response.data : response.data.body,
    (error) => {
        console.log(error);
    }
);

export {MGW};