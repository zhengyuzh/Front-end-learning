<template>
  <div class="ForAndIf">
    <div class="top">
      <span class="top-title">v-if和v-for的区别</span>
    </div>

   
    <div class="showOne" v-show="isShow">
      <span>展示Show</span>
    </div>
 
  </div>
</template>

<script>

export default {
  name: "ForAndIf",

  data() {
    return {
      num: 1,
      isShow: false,
    };
  },
  methods: {

  },
};
</script>


<style lang="scss" scoped>
.ForAndIf {
  background-color: pink;
  width: 80%;
  height: 500px;
  margin: auto;
  border: 2px solid black;
  padding: 5px;
  .top{
    margin-top: -30px;
  }
  .top-title {
    font-size: 24px;
    border:none;
    padding: 2px;
  }

  span {
    padding: 8px;
    border: 2px solid black;
  }
}

.showOne {
  width: 50%;
  height: 50%;
}
</style>
