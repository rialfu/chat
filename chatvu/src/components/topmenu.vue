<template>
    <nav class="navbar navbar-expand-lg navbar-dark" v-if="userStore.authUser !== null && userStore.authUser.access_token" >
      <router-link class="navbar-brand" :to="{name:'dashboard'} " >{{userStore.authUser.name}} </router-link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <!-- <li class="nav-item" :class="[this.$route.name=='dashboard'?'active':'']" >
            <router-link class="nav-link" :to="{name:'dashboard'} " >{{userStore.authUser.name}} </router-link>
          </li> -->
          <li class="nav-item" :class="[this.$route.name=='chat'?'active':'']">
            <router-link class="nav-link" :to="{name:'chat'} " >Chat</router-link>
          </li>
          <li class="nav-item" :class="[this.$route.name=='inbox' || this.$route.name=='new'|| this.$route.name=='sent' ?'active':'']">
            <router-link class="nav-link" :to="{name:'inbox'} " ><i class="material-icons">
            mail
            </i></router-link>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" :to="{name:'setting'} " >Setting</router-link>
              <a class="dropdown-item" href="#" @click.prevent='logout' >Logout</a>
            </div>
          </li>
          
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="material-icons">
search
</i></button>
        </form> -->
        </div>
    </nav>
    
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{

    ...mapState({
      userStore: state=>state.userStore
    })
  },
  methods:{
    logout(){
      console.log('ok')
      this.$store.dispatch('clearAuthUser')
      window.localStorage.removeItem('authUser')
      this.$router.push({name:'home'})
    }
  },
  created(){
    // console.log(this.$route.name);
  }
}
</script>
<style scoped>
nav{
  background-color: #4ebf55;
}
button{
  background-color:#57d1ba;
  color:white;
}
.navbar-brand{
  margin-left: 5%;
}

</style>
