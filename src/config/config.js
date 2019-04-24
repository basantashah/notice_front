

const server = 'http://localhost:8000/'
const config = {

    login: server + 'api/user/login',
    register: server + 'api/auth/register',
    notice: server + 'api/notice/fetch',
    yourNotice: server + 'api/notice/yournotice',
    postNotice: server + 'api/notice/post',
    updateNotice: server + 'api/notice/update',
    deleteNotice: server + 'api/notice/delete'

};

export default config;

