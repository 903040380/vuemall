<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
#tab-bar{
    display: flex;
    background-color: #EEEEEE;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 5px rgba(0,0,0,15%);
  }

</style>
