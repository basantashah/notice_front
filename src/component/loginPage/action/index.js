export const TOKEN = 'TOKEN'

export const getToken = (token) =>{
    return{
        type:TOKEN,
        payload:{token}
    }
}