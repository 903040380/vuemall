<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.title" class="recommend-item">
        <a :href="item.link">
            <img :src="item.image">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 10px;
    border-bottom:10px solid #eee;
}
.recommend img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
}
.recommend-item{
    flex: 1;
}
</style>
