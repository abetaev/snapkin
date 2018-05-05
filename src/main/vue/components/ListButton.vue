<template>
  <action-button :label="label" @click="$store.activate(name)"/>
</template>
<script>
import actionButton from "./ActionButton.vue";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    // store: {
    //   type: Vuex.Store,
    //   required: true
    // }
  },
  components: {
    actionButton
  },
  methods: {
    constructor() {
      this.data = {};
    },

    all() {},

    get(key) {
      throw "not implemented";
    },

    put(key, value) {
      return this.data(key);
    },

    delete(key) {
      return this.data.remove(key);
    }
  }
};
</script>