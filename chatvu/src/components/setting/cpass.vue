<template>
<div class="form" >
    <h3>Change Password</h3>
    <div class="alert alert-success" role="alert" v-show="success" >
    Success Change Your Password
    </div>
    <form @submit.prevent='send' >
        <div class="form-group">
            <label for="exampleInputEmail1">Current Password</label>
            <input type="password" class="form-control" v-model="passL" placeholder="Enter Your Old Password" @keypress='passw'>
            <small v-show="pass"> Your password is wrong</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">New Password </label>
            <input type="password" v-model="passB" minlength="6"  class="form-control" @keyup='checking' placeholder="Enter Your New Password" @keypress='passw' >
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Re-type New Password </label>
            <input type="password" v-model="cp" minlength="6"  class="form-control" @keyup='checking' placeholder="Re-type New Password" @keypress='passw' >
            <small v-show="re" :style="{color:colornotif} " >{{message}} </small>
        </div>
        <!-- <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" v-model="check" @click='show' >
            <label class="form-check-label" for="exampleCheck1">Show Password</label>
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
            passB:'',
            passL:'',
            check:false,
            pass:false,
            success:false,
            cp:'',
            re:false,
            message:'',
            colornotif:''
        }
    },
    methods:{
        send(){ 
            if(this.passB!='' && this.passL!=''){
                let postData={
                    'passB':this.passB,
                    'passL':this.passL
                    }
                // console.log(postData)
                
                axios.post('http://localhost:8000/api/v1/edit-pass',postData, {headers:getHeader()})
                .then(res=>{
                    if(res.data.data==true){
                        this.passB=''
                        this.passL=''
                        console.log(res)
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
        },show(){
            if(this.ptf=='password'){
                return this.ptf='text'
            }
            return this.ptf='password'
        },checking(){
            if(this.cp!=''){
                if(this.cp==this.passB){
                    this.message='Your Password is match'
                    this.re=true
                    this.colornotif='green'
                }else{
                    this.message='Your password is not match'
                    this.re=true
                    this.colornotif='red'
                }
            }else{
                this.re=false
                this.message=''
                this.colornotif=''
            }
            
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