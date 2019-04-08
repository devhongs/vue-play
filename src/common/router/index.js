import Vue from "vue";
import VueRouter from "vue-router";
import Menu1 from "../../page/Menu1.vue";
import Menu2 from "../../page/Menu2.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/foo',
		component: Menu1
	},
	{
		path: '/bar',
		component: Menu2
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
