<template>
  <Header @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
    ...mapGetters(["getTask"]),
  },

 
  components: {
    Tasks: require("@/components/Tasks").default,
    AddTask: require("@/components/AddTask").default,
    Header: require("@/components/Header").default,
    Footer: require("@/components/Footer").default,
  },
  data() {
    return {
      showAddTask:false
    };
  },
  methods: {
    ...mapActions(["addTask", "fetchTasks", "deleteTask", "toggleReminder"]),
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
  async created() {
    this.fetchTasks();
  },
//    mounted() {
//     this.$store.dispatch("fetchTasks");
//   },
};
</script>

