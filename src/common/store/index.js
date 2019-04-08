import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		world: '임시 세계'
	},
	mutations: {
		setWorld: function(state, data) {
			state.world = data;
		}
	},
	actions: {},
});

export default store;
