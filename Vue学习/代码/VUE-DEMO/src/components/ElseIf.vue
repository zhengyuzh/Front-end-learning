<template>
  <div class="ElseIf">
    <div class="top">
      <span class="top-title">v-if和v-else和v-else-if的使用</span>
    </div>
    <div class="center">
      <span>测试MyTest的值是{{ MyTest }}</span>
      <el-button type="primary" @click="changeStatus()">
        点我改变MyTest的值
      </el-button>
      <!-- <el-button type="primary" @click="changeStatus()">
        isNum的值是：{{ isNum }} 。isFlag 的值是:{{ isFlag }}</el-button
      > -->
      <!-- <span v-if="1 == isNum">我是v-if isNum 是1</span>
      <span v-else-if="2 == isNum">我是第一个v-else-if isNum 是2</span>
      <span v-else-if="3 == isNum">我是第二个v-else-if isNum 是3</span>
      <span v-else>我是v-else 我 isNum 是不是1,2,3</span> -->
    </div>

    <!-- <template v-if="isFlag">
      <div class="bottom">
        <span>我是被包裹的P标签 | </span>
        <span>我是被包裹的P标签 | </span>
        <a href="#">我是超链接标签</a>
      </div>
    </template> -->
  </div>
</template>

<script>
import action from "@/standard-js-lib/business/common/test";
export default {
  name: "ElseIf",
  data() {
    return {
      isFlag: true,
      isNum: 1,
      MyTest: 2,
    };
  },
  methods: {
    changeStatus() {
      var num = action.testA(this.MyTest);
      if (num == 0) {
        this.MyTest = action.testA(10);
      } else if (num > 15) {
        this.MyTest = -1;
      }

      // this.isFlag = !this.isFlag;
      // this.isNum++;
      // if (this.isNum > 4) {
      //   this.isNum = 1;
      // }
    },
  },
  created() {
    this.MyTest = action.testA(this.MyTest);
  },
};
</script>


<style lang="scss" scoped>
.ElseIf {
  background-color: pink;
  width: 80%;
  height: 500px;
  margin: auto;
  margin-top: 80px;
  border: 2px solid black;
  padding: 5px;

  .top-title {
    font-size: 24px;
    border: none;
    padding: 5px;
  }
}

.center {
  border: 1px solid black;
}

.bottom {
  width: 50%;
  margin: auto;
  height: 150px;
  margin-top: 10px;
  border: 3px solid red;
  border-radius: 35px;
}
</style>
