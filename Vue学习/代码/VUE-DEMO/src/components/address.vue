<template>
  <div class="Address">
    地址：{{ addressName }}
    <button @click="onClick">点我</button>
  </div>
</template>

<script>
export default {
  name: "Address",
  props: ["addressName"],
  data() {
    return {
      address: "广东广州",
    };
  },
  methods: {
    onClick() {
      alert("地址" + this.address);
    },
  },

  beforeCreate() {
    console.error("v-if触发beforeCreate......");
  },
  created() {
    console.error("v-if触发created......");
  },
  beforeMount() {
    console.error("v-if触发beforeMount......");
  },
  mounted() {
    console.error("v-if触发mounted......");
  },

  beforeDestroy() {
    console.error("v-if触发beforeDestroy......");
  },
  destroyed() {
    console.error("v-if触发destroyed......");
  },


};
</script>


<style scoped>
.Address {
  background-color: #f4f4f4;
  width: 50%;
  height: 50%;
  float: left;
}
</style>
