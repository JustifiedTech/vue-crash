<template>
  <!-- <div class="container"> -->
    <!-- <Header @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" /> -->
    <router-view :showAddTask="showAddTask"></router-view>
    <!-- <Footer /> -->
  <!-- </div> -->
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
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style></style>
