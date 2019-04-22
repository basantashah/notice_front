

const server='https://de1ad6c8.ngrok.io/'
const config = {
    
    login: server+'api/user/login',
    register:server+'api/auth/register',
    notice:server+'api/notice/fetch',
    yourNotice:server+'api/notice/yournotice',
    postNotice:server+'api/notice/post'
 
};
 
export default config;