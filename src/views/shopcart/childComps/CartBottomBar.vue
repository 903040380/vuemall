<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">合计:{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算:({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      //   return !(this.$store.state.cartList.filter(item => !item.checked).length)
      return this.$store.state.cartList.length
        ? !this.$store.state.cartList.find((item) => !item.checked)
        : false;
    },
  },
  methods:{
      checkClick(){
          if(this.isSelectAll){
              this.$store.state.cartList.forEach(item=>item.checked=false)
          }else{
              this.$store.state.cartList.forEach(item=>item.checked=true)
          }
      },
      calcClick(){
          if(this.checkedLength===0){
              this.$toast.show('请选择购买的商品',2000)
          }
      }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  line-height: 40px;
  position: relative;
  background-color: #eee;
  display: flex;
  font-size: 16px;
}
.check-content {
  width: 60px;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.check-button {
  width: 22px;
  height: 22px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  text-align: center;
  width: 100px;
  background-color: red;
  color: #fff;
}
</style>
