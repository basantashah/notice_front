

const server='https://828246b8.ngrok.io/'
const config = {
    
    login: server+'api/user/login',
    register:server+'api/auth/register',
    notice:server+'api/notice/fetch',
    yourNotice:server+'api/notice/yournotice',
    postNotice:server+'api/notice/post'
 
};
 
export default config;