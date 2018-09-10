<template>
    <div class="container">
        <section class="heading" >
            <h1>Chat</h1>
        </section>
        <section id="content" >
            <div class="row">
                <div class="col-md-3 text-center" id="id-user-list" >
                    <user-list></user-list>
                </div>
                <div class="col-md-7" id="chat-content" >
                    <div class="chat-block">
                        <chat-widget></chat-widget>    
                    </div>
                    <div class="add-chat-block">
                        <add-chat-block></add-chat-block>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> -->
            </div>
        </section>
    </div>
</template>
<script>
import ChatWidget from '../components/chat/ChatWidget'
import {mapState} from 'vuex'
import chatUserList from '../components/chat/chatUserList'
import chatAddwid from '../components/chat/chatAddWid'
export default {
    components:{
        'user-list':chatUserList,
        'chat-widget':ChatWidget,
        'add-chat-block':chatAddwid
    },
    created(){
        this.$store.dispatch('setUserList')
    },
    computed:{
       
    }
}
</script>
<style scoped>
.chat-block{
 max-height: 300px;
 overflow: auto;
 min-height:100px;
}
</style>
