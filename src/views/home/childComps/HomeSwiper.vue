<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
      return{
          isLoad:false
      }
  },
  components:{
      Swiper,
      SwiperItem,
  },
  methods:{
      imageLoad(){
          if(!this.isLoad){
              this.$emit('swiperImageLoad')
              this.isLoad=true
          }
          
      }
  }
};
</script>

<style scoped>
</style>
