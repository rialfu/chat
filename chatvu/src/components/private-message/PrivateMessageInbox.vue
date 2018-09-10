<template>
    <div class="PrivateMessage PrivateMessage-Inbox container-fluid">
        <section class="header text-center">
            <h1 class="page-title">Private Message <small>My Private Message</small> </h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-sm-2 col-with-right-border">
                    <pm-sidebar></pm-sidebar>
                </div>
                <div class="col-sm-9">
                    <table class="table table-hover table-bordered table-condensed message-table" >
                        <thead class="text-center" >
                            <th>From</th>
                            <th>Subject</th>
                            <th>Time Ago</th>
                        </thead>
                        <tbody>
                            <tr v-for="message in pmStore.messagesRec" :class="[message.read==0?'unread table-primary':'read']" class="text-center" >
                                <td class="w-25" >{{message.sender.name}}</td>
                                <td class="w-50"><router-link :to="{name:'view',params:{id:message.id} } " >
                                    {{message.subject}}
                                </router-link></td>
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
import{mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
        pmStore:state=>state.privateMessageStore
        })
    },
    created(){
        this.$store.dispatch('setUserMessagesRec')
    },
    components:{
        'pmSidebar':pmSidebar
    }
    
}
</script>
<style scoped>
.container-fluid{
    margin-top: 2%;
}
.w-25{
    width:25%;
}
.w-50{
    width:50%;
}
.content{
    margin-top: 30px;
}
</style>


