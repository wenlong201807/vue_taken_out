<template>
  <div id="msite">
    <h2>{{miste}}</h2>
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
export default {
  name:'Msite',
  data(){
    return {
      miste:'miste'
    }
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="scss">
@import '~@/styles/common.scss';
#msite{
  height: 100%;
  width: 100%;
  background: $color;
}
</style>

