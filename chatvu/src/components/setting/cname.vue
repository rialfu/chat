<template>
<div class="form" >
    <h3>Change Your Name</h3>
    <div class="alert alert-success" role="alert" v-show="success" >Success Change Your Name</div>
    <form @submit.prevent='send' >
        <div class="form-group">
            <label for="exampleInputEmail1">Name Baru</label>
            <input type="text" class="form-control" v-model="name" placeholder="Enter Your New Name">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Current Password</label>
            <input type="password" v-model="passL" class="form-control" id="exampleInputPassword1" placeholder="Password" @keypress='passw' >
            <small :style="{color:'red'} " v-show="alert"> {{message}}</small>
        </div>
        <!-- <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" v-model="check" >
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
        <!-- <p>{{passL}} </p> -->
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            
</div>
    
</template>
<script>
import axios from 'axios'
import {getHeader} from './../../config'
export default {
    data(){
        return{
            name:'',
            passL:'',
            check:false,
            alert:false,
            success:false,
            message:''
        }
    },
    methods:{
        send(){ 
            if(this.name!='' && this.passL!=''){
                let postData={
                    'name':this.name,
                    'passL':this.passL
                    }
                // console.log(postData.name)
                
                axios.post('http://localhost:8000/api/v1/edit-name',postData, {headers:getHeader()})
                .then(res=>{
                    if(res.data.data==true){
                        var $authUser= JSON.parse(window.localStorage.getItem('authUser')) 
                        $authUser.name=this.name
                        window.localStorage.setItem('authUser', JSON.stringify($authUser))
                        this.$store.commit('EDIT_NAME',postData.name)
                        this.success=true
                        this.name=''
                        this.passL=''
                    }
                    if(res.data.data==false){
                        this.alert=true
                        this.message='Your password is wrong'
                    }
                    // console.log(res.data.data)
                })
                .catch(err=>{
                    console.log(err)
                    this.alert=true
                    this.message='server has been problem'
                })
            }else{
                console.log('your pass or name must isi')
            }
        },passw(){
            this.alert=false
            this.success=false
        }
    }
}
</script>
<style scoped>

.form{
    margin-top:5%;
    margin-left:4%;
}
</style>

