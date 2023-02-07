<template>
  <div class="SwitchComponents">
    <!-- v-if和v-show的区别 -->
    <!-- <ShowAndIf></ShowAndIf> -->

    <!-- v-if v-else-if v-else 的区别 -->
    <!-- <ElseIf></ElseIf> -->
    <!-- v-if 和v-for的区别 -->
    <ForAndIf></ForAndIf>
  </div>
</template>

<script>
//v-if和v-show
import ShowAndIf from "@/components/ShowAndIf";

//v-if和v-else v-else-if
import ElseIf from "@/components/ElseIf";

//v-if和v-for
import ForAndIf from "@/components/ForAndIf";

export default {
  name: "SwitchComponents",
  components: {
    ShowAndIf,
    ElseIf,
    ForAndIf,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.SwitchComponents {
  span {
    font-size: 24px;
    margin-top: -3px;
  }
}
</style>
