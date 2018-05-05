import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import records from "./modules/records.js";
import properties from "./modules/properties.js";

Vue.use(Vuex);

class StoreState {
  constructor() {
    this.records = [];
    this.counter = 0;
    this.initialized = false;
  }
}

export default init => {
  const self = new Vuex.Store({
    state: {
      active: "records",
      counter: 0
    },
    getters: {
      all: (state, getters, rootState, rootGetters) => {
        return rootGetters[state.active + '/all']
      }
    },
    actions: {
      init,
      add({ dispatch, state }, value) {
        dispatch(state.active + "/add", value);
      },
      set({ dispatch, state }, id, value) {
        dispatch(state.active + "/set", id, value);
      },
      delete({ dispatch, state }, id) {
        dispatch(state.active + "/delete", id, value);
      }
    },
    modules: {
      records,
      properties
    }
  });
  return self;
};
