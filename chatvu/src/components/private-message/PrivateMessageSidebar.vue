<template>
    
    <ul class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <li><router-link class="nav-link" :to="{name:'new'} "  :class="[this.$route.name=='new'?'active':'']">Send PM</router-link></li>
        <li><router-link class="nav-link" :to="{name:'inbox'}" :class="[this.$route.name=='inbox'?'active':'']">Inbox</router-link></li>
        <li><router-link class="nav-link" :to="{name:'sent'} " :class="[this.$route.name=='sent'?'active':'']">Sent</router-link></li>
    </ul>
    
    
</template>
<script>
export default {
    created(){
        // console.log(this.$route.name)
    }
}
</script>
<style scoped>
a{
    /* background-color: #2c8fbb; */
    /* color:#fff; */
    border: 0.5px solid #44cde5;
    margin-bottom:3px;
}
</style>

