<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent='handleLogin'  >
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" @keypress='ll' v-model="login.email" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" @keypress='ll' v-model="login.password" required>
      <!-- <div class="checkbox mb-3">
        <label> <input type="checkbox" value="remember-me"> Remember me </label>
      </div> -->
      <small v-show="alert" :style="{color:'red'}"  >{{message}} </small>
      <br v-show="!alert" >
      <button class="btn btn-lg btn-primary btn-block" type="submit" >Login</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2018</p>
    </form>
    
  </div>
</template>

<script>
import axios from 'axios'
import {loginUrl, getHeader} from '../config'
import {clientId,clientSecret} from '../../env'
import {mapState} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      login:{
        email:'',
        password:'',
        
      },
      type:'password',
      alert:false,
      message:''
    }
  },
  methods:{
    handleLogin(){
      if(this.login.email=='' && this.login.password==''){
        return console.log('kosong') 
      }
      const postData={
        grant_type:'password',
        client_id:clientId,
        client_secret:clientSecret,
        username:this.login.email,
        password:this.login.password,
        scope:''  
      }
      const authUser={}
      
      axios.post(loginUrl, postData).then(
        res=>{
          if(res.status===200){
            // console.log(res.data)
            authUser.access_token=res.data.access_token
            authUser.refresh_token=res.data.refresh_token
            window.localStorage.setItem('authUser',JSON.stringify(authUser))
            axios.get('http://localhost:8000/api/user', {headers:getHeader()})
            .then(res=>{
              // console.log('user',res)
              authUser.email=res.data.email
              authUser.name=res.data.name
              window.localStorage.setItem('authUser', JSON.stringify(authUser))
              this.$store.dispatch('setUserObject', authUser)
              this.$router.push({name:'dashboard'})
              
            })
            .catch(err=>console.log('error'))
          }
          if(res.status===401){
            console.log('gk diizinkan')
          }
        }
      ).catch(err=>{
        if(err.response.status===401){
          this.alert=true
          this.message='Your email or password is wrong'
        }
        if(err.response.status===500){
          this.alert=true
          this.message='server has been problem'
        }
        console.log(err.response.status)

      })
    },
    ll(){
      this.alert=false
    }
    
  },
  created(){
   
  },
  computed:{
    ...mapState({
      userStore: state=>state.userStore
    })
  }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  padding-top:10% !important;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index:2 ;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  /* margin-bottom: 10px; */
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-signin .a{
    margin-top:20px;
}

</style>
