<template>
  <div class="index">
    <el-container>
      <el-aside width="250px" style="background-color: #F5FFFA">
        <el-menu background-color="	#F5FFFA" :default-openeds="['1', '2']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-s-home"></i>首页信息</template
            >
            <el-menu-item index="1-1">
              <router-link
                to="/HomePage"
                style="color: black; text-decoration: none"
                >首页信息</router-link
              >
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>信息展示</template
            >
            <el-menu-item index="2-1">
              <router-link
                to="/Demo1Page"
                style="color: black; text-decoration: none"
                >测试页面1</router-link
              >
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link
                to="/FlexibleBoxDemo"
                style="color: black; text-decoration: none"
                >弹性盒子</router-link
              >
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link
                to="/BoxModelDemo"
                style="color: black; text-decoration: none"
                >盒子模型</router-link
              >
            </el-menu-item>
            <el-menu-item index="2-4">
              <router-link
                to="/SwitchComponents"
                style="color: black; text-decoration: none"
                >组件切换</router-link
              >
            </el-menu-item>
            <el-menu-item index="2-5">
              <router-link
                to="/OrderInfo"
                style="color: black; text-decoration: none"
                >订单详情</router-link
              >
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>库存管理</template
            >

            <el-menu-item index="3-1">货号信息</el-menu-item>
            <el-menu-item index="3-2">入库信息</el-menu-item>
            <el-menu-item index="3-3">入库详情</el-menu-item>

            <el-menu-item index="3-4">出库信息</el-menu-item>
            <el-menu-item index="3-4">出库详情</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-unlock"></i>辅助管理</template
            >

            <el-menu-item index="3-1"
              ><span><i class="el-icon-unlock"></i></span>
              修改密码</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isCollapse: true,
      msg: "hello",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  height: 750px;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
* {
  margin: 0;
  padding: 0;
  /* css3盒子模型 */
  box-sizing: border-box;
}
</style>
