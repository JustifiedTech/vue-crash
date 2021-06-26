<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder?'reminder':'','task']">
        <h3>{{task.task}}
        <em class="fas" @click="$emit('delete-task', task.id)"> X</em>
        </h3>
        <p class="i">{{task.date}}</p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props:{
        task:Object
    },
    methods:{
       
    }
}
</script>

<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>