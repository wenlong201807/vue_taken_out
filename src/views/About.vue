<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="initData">点击</button>
  </div>
</template>

<script>
import {about} from '@/api/about'
export default {
  name:'about',
  data(){
    return {      
      init_data:[]
    }
  },
  created(){
    this.initData()
    console.log(about.defaults.baseURL)
  },
  methods:{
    async initData(){
      const {data} = await  this.$axios.get(about.defaults.baseURL+'/test')
      console.log(data)
     
    }
  }
}
</script>
