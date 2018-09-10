export const apiDomain= 'http://localhost:8000/'
export const loginUrl           =apiDomain+'oauth/token'
export const userListUrl        =apiDomain+'api/v1/user-list'

export const userMessageRec     =apiDomain+'api/v1/get-private-messages'
export const userMessageSent    =apiDomain+'api/v1/get-private-messages-sent'
export const privateMessageById =apiDomain+'api/v1/get-private-message'
export const sendPrivateMessage =apiDomain+'api/v1/sent-private-message'
export const getHeader= function(){
    const token = JSON.parse(window.localStorage.getItem('authUser'))
    const header ={
        'Accept':'application/json',
        'Authorization':'Bearer '+ token.access_token
    }
    return header
}