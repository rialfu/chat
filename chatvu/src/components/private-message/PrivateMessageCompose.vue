<template>
    <div class="PrivateMessage PrivateMessage-Inbox container-fluid " >
        <section class="header text-center">
            <h1 class="page-title">Compose Message <small>Send a Private Message</small> </h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-sm-2 col-with-right-border">
                    <pm-sidebar></pm-sidebar>
                </div>
                <div class="col-sm-9">
                     <!-- <p>Upcoming</p> -->
                    <form @submit.prevent='handleSubmit' >
                        <div class="form-group">
                            <label for=""> Select User</label>   
                        <multiselect v-model="userSelected" 
                        :options="userList" :searchable="true" 
                        :close-on-select="true" 
                        track-by="id"
                        :show-labels="false" label="name"
                        placeholder="Select User">
                        </multiselect>
                        <span></span>
                        </div>
                        <div class="form-group">
                            <label for="">Subject</label>
                            <input type="text" v-model="subject" class="form-control" @keydown.enter.prevent='handleSubmit'>
                        </div>
                        <div class="form-group">
                            <label for="">Message</label>
                            <textarea v-model="message" class="form-control"></textarea>
                        </div>
                        <button class="btn btn-primary" type="submit">Send</button>
                         

                    </form>
                </div>
            </div>
            
            
        </section>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import Multiselect from 'vue-multiselect'
import pmSidebar from './PrivateMessageSidebar'
export default {
    components:{
        'pmSidebar':pmSidebar,
        // Multiselect
        
    },
    computed:{
        ...mapState({
        pmStore:state=>state.privateMessageStore,
        userStore:state=>state.userStore
        }),
        ...mapGetters([
            'userList'
        ])
    },
    created(){
        this.$store.dispatch('getUserList')
    },
    data(){
        return{
            userSelected:null,
            subject:'',
            message:'',
            
        }
    },
    methods:{
        handleSubmit(){
            if(this.userSelected.id===null){
                return this.userSelected.id===''
            }
            let postData={
                'receiver_id'   :this.userSelected.id,
                'message'       :this.message,
                'subject'       :this.subject
            }
            // console.log(postData)
            this.$store.dispatch('sendPrivateMessage',postData)
            .then(res=>{
                this.$router.push({name:'sent'})
            })
        }
    }
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.container-fluid{
    margin-top:2%;
}
.content{
    margin-top: 30px;
}
</style>
