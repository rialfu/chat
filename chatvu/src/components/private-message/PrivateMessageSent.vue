<template>
    <div class="PrivateMessage PrivateMessage-Inbox container-fluid " >
        <section class="header text-center">
            <h1 class="page-title">Sent Message <small>All private message that i've sent</small> </h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-sm-2 col-with-right-border">
                    <pm-sidebar></pm-sidebar>
                </div>
                <div class="col-sm-9">
                    <table class="table table-hover table-bordered table-condensed message-table" >
                        <thead class="text-center" >
                            <th>Sent to</th>
                            <th>Subject</th>
                            <th>Time</th>
                        </thead>
                        <tbody>
                            <tr v-for="message in pmStore.messagesSent"  class="text-center" >
                                <td class="w-25" >{{message.receiver.name}}</td>
                                <td class="w-50">
                                    <router-link :to="{name:'view',params:{id:message.id} } " >{{message.subject}}</router-link>
                                    </td>
                                <td class="w-25">{{message.created_at}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            
        </section>
    </div>
</template>
<script>
import pmSidebar from './PrivateMessageSidebar'
import {mapState} from 'vuex'
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
        this.$store.dispatch('setUserMessagesSent')
    },
    
}
</script>
<style scoped>
.container-fluid{
    margin-top:2%;
}
.content{
    margin-top: 30px;
}
.w-25{
    width: 25%;
}
.w-50{
    width: 50%;
}
</style>
