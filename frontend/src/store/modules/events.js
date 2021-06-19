import axios from 'axios';
import { isDateWithinInterval, compareDates } from '../../functions/datetime';
import { serializeEvent } from '../../functions/serializers';

const apiUrl = 'http://localhost:3000';

const state = {
  events: [],
  event: null,
  isEditMode: false,
  clickedDate: null,
};

const getters = {
  events: state => state.events.filter(event => event.calendar.visibility).map(event => serializeEvent(event)),
  event: state => serializeEvent(state.event),
  dayEvents: state =>
    state.events
      .map(event => serializeEvent(event))
      .filter(event => isDateWithinInterval(state.clickedDate, event.startDate, event.endDate))
      .sort(compareDates),
  isEditMode: state => state.isEditMode,
  clickedDate: state => state.clickedDate,
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
  appendEvent: (state, event) => (state.events = [...state.events, event]),
  setEvent: (state, event) => (state.event = event),
  removeEvent: (state, event) => (state.events = state.events.filter(e => e.id !== event.id)),
  resetEvent: state => (state.event = null),
  updateEvent: (state, event) => (state.events = state.events.map(e => (e.id === event.id ? event : e))),
  setEditMode: (state, bool) => (state.isEditMode = bool),
  setClickedDate: (state, date) => (state.clickedDate = date),
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit('setEvents', response.data);
  },
  async createEvent({ commit }, event) {
    const response = await axios.post(`${apiUrl}/events`, event);
    commit('appendEvent', response.data);
  },
  async deleteEvent({ commit }, id) {
    const response = await axios.delete(`${apiUrl}/events/${id}`);
    commit('removeEvent', response.data);
    commit('resetEvent');
  },
  async updateEvent({ commit }, event) {
    const response = await axios.put(`${apiUrl}/events/${event.id}`, event);
    commit('updateEvent', response.data);
  },
  setEvent({ commit }, event) {
    commit('setEvent', event);
  },
  setEditMode({ commit }, bool) {
    commit('setEditMode', bool);
  },
  setClickedDate({ commit }, date) {
    commit('setClickedDate', date);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
