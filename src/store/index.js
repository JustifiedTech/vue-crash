import { createStore } from "vuex";
import axios from "axios";

// Create a new store instance.

const state = {
	tasks: [],
};
const actions = {
	async fetchTasks({ commit }) {
		try {
			const res = await axios.get(`api/tasks`);
			commit("FETCH_TASKS", res.data);
		} catch (error) {
			console.error(error);
		}
	},
	async addTask({ commit }, newTask) {
		try {
			const res = await axios.post(`api/tasks`, newTask);
			const result = await res.data;
			commit("ADD_TASK", result);
		} catch (error) {
			console.log(error);
		}
	},
	async deleteTask({ commit }, id) {
		if (confirm("Are you sure?")) {
			const res = await axios.delete(`api/tasks/${id}`);
			const status = res.status;
			commit("DELETE_TASK", { id, status });
		}
	},

	async toggleReminder({ commit, getters }, id) {
		// const res = await axios.get(`api/tasks/${id}`);
		// const taskToToggle = res.data;
		const taskToToggle = getters.getTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
		await axios.put(`api/tasks/${id}`, updTask);
		// const result =  response.status;
		commit("TOGGLE_REMINDER", { id });
	},
};
const mutations = {
	FETCH_TASKS(state, tasks) {
		state.tasks = tasks;
	},
	ADD_TASK(state, result) {
		//  this.tasks.unshift(result);
		state.tasks = [...state.tasks, result];
	},

	DELETE_TASK(state, { id, status }) {
		status == 200
			? (state.tasks = state.tasks.filter((task) => task.id !== id))
			: `Error deleting ${id}`;
	},
	TOGGLE_REMINDER(state, { id }) {
		state.tasks = state.tasks.map((task) =>
			task.id === id
				? {
						...task,
						reminder: !task.reminder,
				  }
				: task
		);
	},
};

const getters = {
	getTask: (state) => (id) => state.tasks.find((task) => task.id === id),
};

const modules = {};
export const store = createStore({
	state,
	mutations,
	actions,
	getters,
	modules,
});

// export default store;
