<template>

    <div id="chat-widget-wrapper">
        <div class="coversation list-group-item" v-for="(chat,index) in chatStore.conversation" >
            <div class="sender-data clearfix">
                <div v-show=" tanggal[index] !== tanggal[index-1] " class="text-center oval" >{{tanggal[index] }} </div>
                <div class="name" :class="[chat.sender.name==userStore.authUser.name?'text-right':'']" >
                    {{chat.sender.name}}</div>
                <!-- <p class="name" :class="[chat.sender.name==userStore.authUser.name?'text-right':'']" >{{chat.created_at}}</p> -->
                <!-- <div class="name"  >{{chat.sender.name}}</div> -->
                <!-- <div class="time" >{{chat.created_at}}</div> -->
                <p class="waktu " :class="[chat.sender.name==userStore.authUser.name?'text-right':'']">{{waktu[index]}} </p>
            </div>
            <div class="chat-body" :class="[chat.sender.name==userStore.authUser.name?'text-right':'']" >
            {{chat.chat}}</div> 
               
        </div>
        <br>
        
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import {bus } from '../../main'
export default {
    computed:{
        ...mapState({
            chatStore: state=>state.chatStore,
            userStore: state=>state.userStore
        }),
        ...mapGetters([
            'waktu','tanggal'
        ])
    },
    mounted(){
        // alert('m')
        bus.$on('show', (data)=>{
            // this.$store.commit('MODIFICATION')
            // .then(res=>{console.log(res)})
            // this.$store.getters.mo
        });
    },
    methods:{
        
    },
    data(){
        return{
            // 'modification':''
        }
    },
    
}
</script>
<style scoped>
.coversation{
    height:70%;
}
.right{
    float:right;
}
.chat-body{
    /* background-color:aqua;
    max-width: 60%; */
}
/* .oval{
    width: 3%;
	height: 1%;
	background: red;
	-moz-border-radius: 100px / 50px;
	-webkit-border-radius: 100px / 50px;
	border-radius: 100px / 50px;
} */
/* .a{
    background-color:aqua;
} */
</style>

