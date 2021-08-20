<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="isActive">
        <slot name="item-icon-active"></slot>
      </div>
      <div v-else>
        <slot name="item-icon"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>   
    </div>
</template>

<script>
export default {
  name: '',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(err=>err)
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    margin-top:5px;
    margin-bottom:2px;
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
</style>
