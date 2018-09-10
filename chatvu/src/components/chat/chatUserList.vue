<template>
    <div class="wrapper" id="chat-user-list-wrapper">
        <ul class="list-group" >
            <li v-if="user.name!== userStore.authUser.name" 
             :class="[{active: userActiveStyle(user) }] " 
            v-for="user in chatStore.userList" class='list-group-item' @click="changeChatUser(user)" >{{user.name}} </li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import {bus } from '../../main'
export default {
    computed:{
        ...mapState({
            chatStore: state=>state.chatStore,
            userStore: state=>state.userStore
        }),
        // ...mapGetters([
        //     'modification'
        // ])
        // console.log(chatStore)
    },
    methods:{
        userActiveStyle(user){
            // console.log(this.chatStore)
            if(this.chatStore.currentChatUser=== null){
                return false
            }
            if(this.chatStore.currentChatUser.id===user.id){
                return true
            }
            return false
        },
        changeChatUser(user){
            // console.log(user)
            this.$store.dispatch('setCurrentChatUser', user)
            .then(res=>{bus.$emit('show','')})
            
            // this.$store.dispatch('setCurrentChatUser', user);
        }
    }
    
}
</script>
