<template>
    <div class="container">   
        <h1 class="text-center" :style="{color:'grey'} " > Welcome to Social Office <img src="../assets/chat.png" alt=""> </h1>
        <!-- <img src="../assets/tenor.gif" class="d-flex justify-content-center" alt=""> -->
        <!-- <ul>
            <li v-for="post in laravelData.data" :key="post.id">{{ post.name }}</li>
        </ul>
        <pagination :data="laravelData" @pagination-change-page="getResults"></pagination>
         -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            first_page_url:'',
            last_page:'',
            next_page:'',
            prev_page:'',
            total:'',
            laravelData: {},
        }
    },
    computed:{

    },
    created(){
        
    },
    methods:{
        getResults(page = 1) {
			axios.get('http://localhost:8000/api/lol?page=' + page)
				.then(response => {
                    // console.log(response.data.data)
					this.laravelData = response.data.data;
				});
		}
    },
    mounted(){
        this.getResults();
    }
}
</script>
<style lang="scss" scoped>
h1{
    padding:5%;
    color:red;
}
img{
    
    height: 80px;
    width:80px;
}
</style>
