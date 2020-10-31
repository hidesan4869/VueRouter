import Vue from 'vue';
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
     count: 2
   },
   getters: {
     doubleCount: state => state.count * 2,
     fiveCount: state => state.count * 5
   },
   mutations: {
     increment(state, number) {
       state.count += number;
     },
     decrement(state, number) {
       state.count -= number;
     }
   }
 });