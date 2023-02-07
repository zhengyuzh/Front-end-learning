<template>
  <div class="HomePage" >
    <!-- 顶部左侧开始 -->
    <div class="zyz-top-left">
      <Address :addressName="Name"></Address>
      <Address :addressName="Name"></Address>
      <div>
        <ul>
          <TheItem v-for="user in User" :key="user" :userName="user"></TheItem>
        </ul>
      </div>
    </div>
    <!-- 顶部左侧结束 -->

    <!-- 顶部右侧开始 -->
    <div class="zyz-top-right" >
      
    </div>
    <!-- 顶部右侧开始 -->

    <!-- 中部左侧开始 -->
    <div class="zyz-center-left">
      <span>中部左侧开始</span>
      <div class="centerOne">
        <span>我是DIV1</span>
        <div>
          <span>我是DIV2</span>
        </div>
      </div>
    </div>
    <!-- 中部左侧结束 -->

    <!-- 中部右侧开始 -->
    <div class="zyz-center-right">中部右侧开始</div>
    <!-- 中部右侧结束 -->
  </div>
</template>

<script>
//引入组件
import Address from "@/components/address";
import TheItem from "@/components/TheItem";
export default {
  name: "HomePage",

  components: {
    Address,
    TheItem,
  },
  data() {
    return {
      Name: "河南郑州",
      User: ["张三", "李四", "王二", "麻子"],
    };
  },
  methods: {},
  created() {},
};
</script>


<style lang="scss" scoped>
.zyz-top-left {
  height: 250px;
  width: 48%;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid black;
}

.zyz-top-right {
  height: 250px;
  width: 48%;
  float: right;
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid black;
  
}

.zyz-center-left {
  height: 250px;
  width: 48%;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid black;
}

.zyz-center-right {
  height: 250px;
  width: 48%;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid black;
}

ul li {
  list-style-type: none;
}
</style>
