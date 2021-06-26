<template>
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

  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks: require("@/components/Tasks").default,
    AddTask: require("@/components/AddTask").default,
  },
  data() {
    return {
      // tasks: [],
    };
  },
  methods: {
    ...mapActions(["addTask", "fetchTasks", "deleteTask", "toggleReminder"]),
  },
  async created() {
    this.fetchTasks();
  },
  //  mounted() {
  //   this.$store.dispatch("fetchTasks");
  // },
};
</script>
