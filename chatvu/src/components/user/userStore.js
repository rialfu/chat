import axios from 'axios'
import {userListUrl,getHeader} from './../../config'
const state = {
    authUser: null,
    users:[]
}

const mutations = {
    SET_AUTH_USER(state, userObj){
        state.authUser = userObj
    },
    CLEAR_AUTH_USER(state){
        state.authUser = null
    },
    SET_USER_LIST(state, users){
        state.users= users
    },
    EDIT_NAME(state, name){
        state.authUser.name=name
    } 
}

const actions = {
    setUserObject:({commit}, userObj)=>{
        commit('SET_AUTH_USER', userObj)
    },
    // aktif di navbar
    clearAuthUser:({commit})=>{
        commit('CLEAR_AUTH_USER')
    },
    // aktif di App.vue
    getUserList:({commit})=>{
        return axios.get(userListUrl, {headers:getHeader()})
            .then(res=>{
                commit('SET_USER_LIST',res.data.data)
                return res.data.data
            })
    }
}
const getters={
    userList(state){
        let x
        let $users=[]
        let $authUser= JSON.parse(window.localStorage.getItem('authUser'))
        for(x in state.users){
            if(state.users[x].name==$authUser.name){
                continue
            }
                $users[x]=state.users[x]
        }
        
        return $users
    }
}

export default{
    state, mutations, actions, getters
}