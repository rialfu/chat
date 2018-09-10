import Vue from 'vue'
import {getHeader, userMessageRec, sendPrivateMessage,
userMessageSent, privateMessageById} from '../../config'
import axios from 'axios'
const state={
    notification:[],
    messagesRec:[],
    messagesSent:[],
    message:{
        subject:'',
        message:'',
        sender:''
    }
}
const mutations={
    SET_MESSAGES_REC(state,messages){
        state.messagesRec= messages
    },
    SENT_MESSAGES_SENT(state, messages){
        state.messagesSent= messages
    },
    SET_MESSAGES_VIEW(state, message){
        state.message=message
    },
    CLEAR_MESSAGE_VIEW(state){
        state.message={
            subject:'',
            message:'',
            sender:''
        }
    },
    SEND_PRIVATE_MESSAGE(state, message){
        state.messagesSent.push(message)
    }
}
const actions = {
    setUserMessagesRec:({commit})=>{
        let postData={}
        // console.log('ok')
        return axios.post(userMessageRec,postData,{headers:getHeader()})
            .then(res=>{
                // console.log(res.data.data)
                commit('SET_MESSAGES_REC',res.data.data)
                // Vue.$logger('info','setUserMessagesRec response', res)
            })
    },
    setUserMessagesSent:({commit})=>{
        let postData={}
        return axios.post(userMessageSent,postData,{headers:getHeader()})
            .then(res=>{
                // console.log(res.data.data)
                commit('SENT_MESSAGES_SENT',res.data.data)
            })
    },
    getPrivateMessageById:({commit},id)=>{
        let postData={'id':id}
        return axios.post(privateMessageById,postData,{headers:getHeader()})
            .then(res=>{
                console.log(res.data.data)
                
                commit('SET_MESSAGES_VIEW',res.data.data)
            }).catch(err=>{
                var data=null
                commit('SET_MESSAGES_VIEW',data)
            })
    },
    clearMessageView:({commit})=>{
        commit('CLEAR_MESSAGE_VIEW')
    },
    sendPrivateMessage:({commit},postData)=>{
        console.log('ok')
        return axios.post('http://localhost:8000/api/v1/sent-private-message',postData,{headers:getHeader()})
            .then(res=>{
                commit('SEND_PRIVATE_MESSAGE',res.data.data)
                // console.log(res.data.data)
                return res.data.data
            })
    }
}

export default{
    state, mutations, actions
}