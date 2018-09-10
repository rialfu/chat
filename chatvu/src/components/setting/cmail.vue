<template>
<div class="form" >
    <h3>Change Email</h3>
    <div class="alert alert-success" role="alert" v-show="success" >
    Success Change Your Email
    </div>
    <form @submit.prevent='send' >
        <div class="form-group">
            <label for="exampleInputEmail1">Email baru anda</label>
            <input type="email" class="form-control" v-model="email" placeholder="Enter Your New Email" @keypress='passw'>
            
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Current Password</label>
            <input type="password" v-model="passL" class="form-control" id="exampleInputPassword1" placeholder="Password" @keypress='passw' >
            <small v-show="pass"> Your password is wrong</small>
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
            email:'',
            passL:'',
            check:false,
            pass:false,
            success:false
        }
    },
    methods:{
        send(){ 
            if(this.email!='' && this.passL!=''){
                let postData={
                    'email':this.email,
                    'passL':this.passL
                    }
                
                axios.post('http://localhost:8000/api/v1/edit-mail',postData, {headers:getHeader()})
                .then(res=>{
                    // console.log(res)
                    if(res.data.data==true){
                        var $authUser= JSON.parse(window.localStorage.getItem('authUser')) 
                        $authUser.email=postData.email
                        window.localStorage.setItem('authUser', JSON.stringify($authUser))
                        // console.log(res)
                        this.success=true
                    }
                    if(res.data.data==false){
                        this.pass=true
                    }
                    // console.log(res.data.data)
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                console.log('harus isi')
            }
        },passw(){
            this.pass=false
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
