import Vue from "vue";
import App from "./App.vue";
import createStore from "./store";
import VuexPersistence from "vuex-persist";

import "purecss/build/pure.css";
import "purecss/build/grids-responsive.css";

const store = createStore(({ state, dispatch }) => {
  if (!state.initialized) {
    state.initialized = true;
    fetch("records.json").then(response =>
      response.json().then(records => {
        records.forEach(label => {
          dispatch("add", label)
        });
      })
    );
  }
});

const app = new Vue({
  render: h => h(App),
  store,
  mounted() {
    store.dispatch("init");
  }
}).$mount("#app");

function forceUpdate() {
  app.$forceUpdate();
}
