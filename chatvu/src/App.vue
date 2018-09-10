<template>
  <div class="a">
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TopMenu from './components/topmenu'
export default {
  name: 'app',
  data () {
    return {
      gambar:''
    }
  },
  components:{
    'top-menu':TopMenu
  },
  computed:{

    ...mapState({
      userStore: state=>state.userStore
    })
  },
  created(){
    // console.log('hi')
    const userObj = JSON.parse(window.localStorage.getItem('authUser'))
    this.$store.dispatch('setUserObject',userObj)
  }
}
</script>

<style >
.container{
  margin-top: 20px;
}
.a{
  
  /* min-height:700px; */
}
</style>
