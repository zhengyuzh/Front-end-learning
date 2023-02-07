<template>
  <div class="FlexibleBoxDemo">
    <span class="top-title">弹性盒子</span>

    <div class="flex-container">
      <div class="flex-item">flex item 1</div>
      <div class="flex-item">flex item 2</div>
      <div class="flex-item">flex item 3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlexibleBoxDemo",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>


<style scoped>
.top-title {
  font-size: 24px;
  padding: 10px;
  border: 2px solid;
  border-radius: 25px;
  background: #dddddd;
}

.flex-container {
  display: -webkit-flex;
  display: flex;
  margin: auto;
  width: 400px;
  height: 250px;
  background-color: lightgrey;
}

.flex-item {
  background-color: cornflowerblue;
  width: 100px;
  height: 100px;
  margin: 10px;
}
</style>
