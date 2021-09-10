<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
    v-show="tasksPage"
      @click="$emit('toggle-add-task')"
      :name="showAddTask?'Close':'Add Task'"
      :color="showAddTask ? 'red':'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Task Tracker",
    },
    showAddTask: Boolean,
  },
  components: {
    Button,
  },

  methods: {
    toggleAddTask() {
      this.$emit("toggle-add-task");
    },
  },
  emits: ["toggle-add-task"],
    computed:{
    tasksPage(){
    return this.$route.path === '/tasks' ? true :false
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
