import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import Login from "../views/Login";
import Tasks from "../views/Tasks";
import Register from "../views/Register";

const routes = [
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/tasks",
		name: "Tasks",
		component: Tasks,
	},
	{
		path: "/",
		name: "Home",
		component: Home,
	},
];
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
