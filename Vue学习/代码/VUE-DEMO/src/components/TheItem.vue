<template>
  <li>{{ userName }}</li>
</template>

<script>
export default {
  name: "TheItem",
  props: ["userName"],
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>


<style scoped>
ul li {
  list-style-type: none;
}
li {
  line-height: 20px;
}
</style>
