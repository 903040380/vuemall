<template>
  <div>
    <tab-bar-wrapper>
      <tab-bar-item path="/home" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/home_active.svg">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.svg">
      </template>
      <template v-slot:item-icon-active activeColor="deepPink">
        <img src="@/assets/img/tabbar/category_active.svg">
      </template>
      <template v-slot:item-text activeColor="deepPink">
        <div>分类</div>
      </template>
      </tab-bar-item>

      <tab-bar-item path="/shopcart">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shopcart.svg">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/shopcart_active.svg">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.svg">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile_active.svg">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
      </tab-bar-item>

    </tab-bar-wrapper>
  </div>
</template>

<script>
import TabBarWrapper from '@/components/common/tabbar/TabBarWrapper'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name: '',
  components: {
    TabBarWrapper,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
