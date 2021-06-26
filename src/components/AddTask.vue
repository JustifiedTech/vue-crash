<template>
  <form @submit.prevent="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="task" name="task" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="datetime-local"
        v-model="date"
        name="date"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",

  data() {
    return {
      task: "",
      date: "",
      reminder: false,
    };
  },

  methods: {
    onSubmit(e) {
      if (!this.task) {
        alert("Please Add a task");
        return;
      }
      const newTask = {
        // id: Math.floor(100 + Math.random() * 999),
        task: this.task,
        date: this.date,
        reminder: this.reminder,
      };
      (this.task = ""),
        (this.reminder = false),
        (this.date = ""),
        this.$emit("add-task", newTask);
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
