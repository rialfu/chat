<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 border-right a ">
                <!-- <h3>SSSSSSSSSSSss</h3> -->
                <ul class="list-group ">
                <li class="list-group-item" @click.prevent="component='cpass'" :class="[this.component=='cpass'?'active':'']" > <i class="material-icons">
                vpn_key</i> Change Password </li>
                <li class="list-group-item" @click="component='cname'" :class="[this.component=='cname'?'active':'']" ><i class="material-icons">
                perm_identity</i> Change Name</li>
                <li class="list-group-item" @click="component='cmail'" :class="[this.component=='cmail'?'active':'']"><i class="material-icons">
                contact_mail</i> Change Email</li>
                <!-- <li class="list-group-item"><i class="material-icons">
                insert_photo</i> Change Photo </li>
                <li class="list-group-item">Vestibulum at eros</li> -->
                </ul>
            </div>
            <div class="col-sm-9">
                <!-- <h3>LOLLLLL</h3> -->
                <component v-bind:is="component"></component>
            </div>
            
        </div>
            
        
    </div>
</template>
<script>
import cname from './../components/setting/cname'
import cpass from './../components/setting/cpass'
import cmail from './../components/setting/cmail'
import axios from 'axios'
export default {
    data(){
        return{
            component:'cpass'
        }
    },
    methods:{
        
    },
    components:{
        'cname':cname,
        'cpass':cpass,
        'cmail':cmail

    }
}
</script>
<style scoped>
.col-sm-3{
    /* padding-top: 2%;
    padding-left: 0 !important ;
    height:100%;
    background-color:#66dda1; */
    /* position:absolute;
    left:0; */
    /* padding-left: 0; */
    padding-top:1%;
    min-height:600px;
    /* padding: 0 0 3% 0; */
}
.list-group-item{
    border:0!important;
}
.col-sm-9{
    padding-right: 10%;
    /* border:1px solid grey; */
    /* height:100%; */
    /* position:fixed; */
    /* right:0; */

    /* background-color: red; */
}
</style>

