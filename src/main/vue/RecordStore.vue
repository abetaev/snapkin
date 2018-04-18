<script>
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

export class StoreState {
  constructor() {
    this.records = [];
    this.counter = 0;
    this.initialized = false;
  }
}

export default new Vuex.Store({
  state: new StoreState(),
  getters: {
    records({ records }) {
      return records;
    }
  },
  actions: {
    load({ state, commit, dispatch }) {
      console.log("-1");
      if (!state.initialized) {
        state.initialized = true;
        fetch("records.json").then(response =>
          response
            .json()
            .then(records =>
              records.forEach(label => dispatch("createRecord", label))
            )
        );
      }
    },
    createRecord({ commit }, label) {
      return commit("createRecord", label);
    },
    deleteRecord({ commit, $forceUpdate }, id) {
      return commit("deleteRecord", id);
    }
  },
  mutations: {
    createRecord: (state, label) => {
      state.counter++;
      state.records.push({
        id: "rec#" + state.counter,
        label: label,
        marked: false
      });
    },
    deleteRecord: (state, id) => {
      state.records = state.records.filter(record => record.id != id);
    }
  },
  plugins: [new VuexPersistence({ storage: window.localStorage }).plugin]
});
</script>