import Vue from 'vue';
import Vuex from 'vuex';
import events from './modules/events';
import calendars from './modules/calendars';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    events,
    calendars,
  },
});
