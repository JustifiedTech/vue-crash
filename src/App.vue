<template>
<div class="app">
<div class="app-wrap">
  <router-view :showAddTask="showAddTask"></router-view>
  
</div>
  
</div>
</template>

<script>
export default {
  name: "App",
  components: {
    Header: require("@/components/Header").default,
    Footer: require("@/components/Footer").default,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {},
};
</script>

<style></style>
