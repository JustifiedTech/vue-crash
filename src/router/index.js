import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import Login from "../views/Login";

const routes = [
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
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
