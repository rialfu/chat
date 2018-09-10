<template>
    <div id="chat-add-widget">
        <form @submit.prevent='handleAddChat'>
            <div class="form-group">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="message" 
                    placeholder="Your Message"  @keydown.enter.prevent='handleAddChat'>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="submit"><i class="material-icons">
                            reply
                        </i></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Pusher from 'pusher-js'
export default {
    created(){
        this.pusher = new Pusher('0b58e87bfec860caa754',{
            encrypted:true,
            cluster:'ap1'
        })
        let that=this
        this.channel=this.pusher.subscribe('chat_channel')
        this.channel.bind('chat_saved', function(data){
            that.$emit('incoming_chat',data)
        })
        this.$on('incoming_chat',function (chatMessage){
            this.incomingChat(chatMessage)
        })  
    },
    computed:{
        ...mapState({
            chatStore:state=>state.chatStore,
            userStore:state=>state.userStore
        })
        
    },
    data(){
        return{
            message:null,
            pusher:null,
            channel:null
        }
    },
    methods:{
        handleAddChat(){
            if(this.message!==null){
                // console.log(this.chatStore.currentChatUser)
                let postData={
                    'receiver_id':this.chatStore.currentChatUser.id,
                    'chat':this.message
                }
                // console.log(postData)
                this.$store.dispatch('addNewChatToConversation', postData)
                .then(res=>{
                    this.message=null
                    // let element=document.getElementById('chat')
                })
            }
        },
        incomingChat(chatMessage){
            if(this.chatStore.currentChatUser.id === chatMessage.message.sender_id){
                // console.log(chatMessage)
                if(chatMessage.message.receiver.email===this.userStore.authUser.email){
                    this.$store.dispatch('newIncomingChat', chatMessage.message)
                }else{
                    console.log('the message its not for you')
                }
            }
        }
    }
}
</script>

<style scoped>

</style>

