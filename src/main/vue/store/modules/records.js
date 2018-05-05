class StoreState {
  constructor() {
    console.log('i say once!')
    this.records = new Map();
    this.counter = 0;
    this.initialized = false;
  }
}

export default {
  namespaced: true,
  state: new StoreState(),
  getters: {
    all({ records }) {
      console.log("all")
      console.log(records)
      return records;
    }
  },
  actions: {
    add({ commit }, record) {
      return commit("createRecord", record);
    },
    deleteRecord({ commit }, id) {
      return commit("deleteRecord", id);
    }
  },
  mutations: {
    createRecord(state, record) {
      state.counter++;
      console.log("create record: " + state.counter + ": " + record);
      state.records.set("" + state.counter, record);
      state.records = new Map(state.records)
      console.log(state.records)
      return state.counter;
    },
    deleteRecord(state, id) {
      state.records = state.records.delete(id);
    }
  }
};
