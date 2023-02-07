<template>
  <div class="ShowAndIf">
    <div class="top">
      <span class="top-title">v-if和v-show的区别</span>
    </div>

    <el-button @click="switchShow" type="primary">点我切换展示 </el-button>
    <div class="showOne" v-show="isShow">
      <span>展示Show</span>
    </div>
    <Address v-if="!isShow"></Address>
  </div>
</template>

<script>
import Address from "@/components/address";
export default {
  name: "ShowAndIf",
  components: {
    Address,
  },
  data() {
    return {
      num: 1,
      isShow: false,
    };
  },
  methods: {
    switchShow() {
      this.isShow = !this.isShow;
      this.num++;
    },
  },
};
</script>


<style lang="scss" scoped>
.ShowAndIf {
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
