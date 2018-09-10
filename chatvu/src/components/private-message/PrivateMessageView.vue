<template>
    <div class="PrivateMessage PrivateMessage-Inbox container-fluid " >
        <section class="header text-center">
            <h1 class="page-title">Sent Message <small>All private message that i've sent</small> </h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-sm-2 border-right">
                    <pm-sidebar></pm-sidebar>
                </div>
                <div class="col-sm-8 ff" v-if="pmStore.message !=null" >
                    <h3>{{pmStore.message.subject}} </h3>
                    <p>From: {{pmStore.message.sender.email}} <span class="float-right" >{{pmStore.message.created_at}} </span></p>
                    <div class="message">
                        {{pmStore.message.message}}
                    </div>
                </div >
                <div class="col-sm-8 ff" v-else>
                    <h3>The Page is not Found</h3>
                </div>
            </div>
            
            
        </section>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import pmSidebar from './PrivateMessageSidebar'
export default {
    components:{
        'pmSidebar':pmSidebar
    },
    computed:{
        ...mapState({
        pmStore:state=>state.privateMessageStore
        })
    },
    created(){
        // console.log(this.$route.params)
        this.$store.dispatch('getPrivateMessageById', this.$route.params.id)
    },
    destroyed(){
        this.$store.dispatch('clearMessageView')
    }
}
</script>
<style scoped>
.container-fluid{
    margin-top:2%;
}
.content{
    margin-top: 30px;
}
.ff{
    margin-left:1.6%;
}
</style>
