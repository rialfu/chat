import Vue from 'vue'
import axios from 'axios'
import {userListUrl,getHeader} from '../../config'
const state={
    userList:{},
    currentChatUser:null,
    conversation:null
}
const mutations={
    SET_USER_LIST(state, userList){
        state.userList= userList
    },
    SET_CURRENT_CHAT_USER(state, currentChatUser){
        state.currentChatUser= currentChatUser
    },
    SET_CONVERSATION(state, conversation){
        state.conversation=conversation
    },
    ADD_CHAT_TO_CONVERSATION(state, chat){
        state.conversation.push(chat)
    },
    MODIFICATION(state){
        var x;
        let tgl={}
        for(x in state.conversation){
            // console.log(x)
            var tanggal=state.conversation[x].created_at.split(" ") 
            var z=tanggal[1].slice(0,5)
            tgl[x]=z
            // console.log(tgl)
        }
        // console.log(tgl)
        return tgl
        
    }
}
const actions={
    setUserList: ({commit}, userList) => {
        return axios.get(userListUrl,{headers:getHeader()})
        .then(res=>{
            if(res.status===200){
                commit('SET_USER_LIST', res.data.data)
                return res.data.data
            }
        }).catch(err=>console.log(err))
    },
    setCurrentChatUser: ({commit}, user)=>{
        commit('SET_CURRENT_CHAT_USER', user)
        let postData={id:user.id}
        // console.log(postData)
        return axios.post('http://localhost:8000/api/v1/get-user-conversation',postData,{headers:getHeader()})
            .then(res=>{ 
                // console.log(res.data.data)
                commit('SET_CONVERSATION', res.data.data)
            })
        
    },
    addNewChatToConversation:({commit}, postData)=>{
        return axios.post('http://localhost:8000/api/v1/chat-save',postData,{headers:getHeader()})
            .then(res=>{
                commit('ADD_CHAT_TO_CONVERSATION',res.data.data)
            })
    },
    newIncomingChat:({commit}, message)=>{
        commit('ADD_CHAT_TO_CONVERSATION', message)
    },
    
}

const getters={
    // aktif di ChatWidget.vue
    waktu(state){
        var x;
        let tgl={}
        for(x in state.conversation){
            
            var tanggal=state.conversation[x].created_at.split(" ") 
            var z=tanggal[1].slice(0,5)
            tgl[x]=z
            // console.log(tgl)
        }
        // console.log(tgl)
        return tgl
    },
    tanggal(state){
        var x
        let tgl={}
        for(x in state.conversation){
            var tanggal=state.conversation[x].created_at.split(" ") 
            var tahun=tanggal[0].slice(0,4)
            var bulan=tanggal[0].slice(5,7)
            var hari =tanggal[0].slice(8,11)
            switch(bulan){
                case '01':
                    bulan= 'Januari';
                    break;
                case '02':
                    bulan= 'Februari';
                    break;
                case '12':
                    bulan= 'Desember';
                    break;

                case '03':
                    bulan= 'Maret';
                    break;
                case '04':
                    bulan= 'April';
                    break;
                case '05':
                    bulan= 'Mei';
                    break;
                case '06':
                    bulan= 'Juni';
                    break;
                case '07':
                    bulan= 'Juli';
                    break;
                case '08':
                    bulan= 'Agustus';
                    break;
                case '09':
                    bulan= 'September';
                    break;
                case '10':
                    bulan= 'Oktober';
                    break;
                case '11':
                    bulan= 'November';
                    break;
            }
            tanggal=hari+' '+bulan+' '+tahun
            tgl[x]=tanggal
        }
        // console.log(tgl)
        return tgl
    }
}
export default{
    state,mutations,actions,getters
}