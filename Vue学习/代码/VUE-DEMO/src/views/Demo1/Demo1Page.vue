<template>
  <div class="Demo1Page">
    <H1>测试CSS样式选择</H1>
    <div class="Box-top">
      <span>我是盒子1</span>
    </div>
    <div class="Box-center">
      <span>我是盒子2</span>
      <span></span>
    </div>
    <div class="Box-bottom">
      <a href="#">我是盒子3</a>
      <span>我是盒子3中的内容</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo1Page",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>


<style lang="scss" scoped>
.Demo1Page {
  border: 1px solid black;
}

.Box-top {
  border: 1px solid black;
  margin: 10px;
  span {
    color: red;
  }
}

.Box-center {
  border: 1px solid black;
  margin: 10px;
  span {
    color: blueviolet;
    border: 1px solid black;
  }
}

.Box-bottom {
  border: 1px solid black;
  margin: 10px;
}
.Box-bottom a {
  text-decoration: none;
  color: pink;
  &:hover{
    color: red;
  }
}
</style>
