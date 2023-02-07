<template>
  <div>
    <div class="box-one">盒子模型</div>
    <div class="box-two"></div>
  </div>
</template>

<script>
export default {
  name: "BoxModelDemo",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>


<style scoped>
div {
  border: 1px solid black;
  background: #cff;
}

div.box-one {
  width: 100px;
  height: 100px;
  background: pink;
  border: 10px dashed red;
  padding: 20px;
  margin: 15px;
}

div.box-two {
  width: 50px;
  height: 50px;
  border: 10px dotted black;
  padding: 20px;
  margin: 20px;
  background: yellow;
}
</style>
