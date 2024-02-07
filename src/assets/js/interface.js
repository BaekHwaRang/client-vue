import axios from "axios";

const CONTEXT_PATH = "/mgw";
const SERVER_PATH = `${CONTEXT_PATH}/api`

export const boardInf = {
    selectList: `/board/getBoardList`,
    selectDetail: `/board/getDetail`,
    insert: `/board/add`,
    delete: `/board/delete`,
    addViewCnt: '/board/addViewCnt'
}

export const userInf = {
    regist: `/regist`,
    login: `/login`,
}


const MGW = axios.create({
    baseURL: `${SERVER_PATH}`,
    headers: {
        "Content-Type": "application/json;",
        "responseHeader": false, // 커스텀 헤더 요청 true -> 원본 response.data, false -> response.data.body
    },
    responseType: "json",
})

// 모피어스 통신 데이터 규격에 맞춤
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