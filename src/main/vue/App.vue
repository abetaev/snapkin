<template>
  <div id="app" @load="store.dispatch('load')">
    <div id="layout" class="pure-g">
      <div class="pure-u-1 pure-u-md-1-6 pure-u-lg-1-5 pure-u-xl-1-3"/>

      <div class="pure-u-1 pure-u-md-2-3 pure-u-lg-3-5 pure-u-xl-1-3 column">

        <div id="contentContainer">
          <div id="content">
            <!-- <div id="header" class="pure-g">
              <div class="pure-u button">
                <button class="pure-button" disabled>🗒</button>
              </div>
              <div class="pure-u button">
                <button class="pure-button" disabled>⚙</button>
              </div>
            </div> -->
            <record v-for="record in store.getters.records" :key="record.id" :record="record" :store="store"/>
            <div id="footer">
              <div id="menu">
                <!-- <button class="pure-button" disabled>☰</button> -->
              </div>
              <div id="input">
                <input type="text" v-model="label" @keypress.enter="newRecord(store, label)"/>
              </div>
              <div id="action">
                <button class="pure-button pure-button-primary" @click="newRecord(store, label)">⏎</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="pure-u-1 pure-u-md-1-3 pure-u-lg-1-5 pure-u-xl-1-3"></div>
    </div>
  </div>
</template>

<script>
import record from "./Record.vue";
import recordStore from "./RecordStore.vue";

export default {
  name: "snapkin",
  data: function() {
    return {
      store: recordStore,
      label: ""
    };
  },
  // computed: {
  //   isHeaderVisible: function() {
  //     var cc = document.getElementById("content");
  //     if (cc != null) return cc.scrollTop <= 0;
  //     return false;
  //   }
  // },
  components: {
    record: record
  },
  methods: {
    newSnapkin(id, label, marked) {
      return { id, label, marked };
    },
    newRecord(store, label) {
      this.$data.label = "";
      if (label.length == 0) {
        return;
      }
      store.dispatch("createRecord", label).then(() => {
        var cc = document.getElementById("content");
        if (cc != null) {
          cc.scrollTop = cc.scrollHeight - cc.clientHeight;
        }
      });
    }
  },
  beforeCreate() {
    recordStore.dispatch("load");
  }
};
</script>
<style>
html,
body {
  height: 100%;
  overflow: auto;
}

.visible {
  display: none;
}

#app {
  width: 100%;
  height: 100%;
  position: relative;
}

#layout {
  width: 100%;
  height: 100%;
  position: absolute;
}

#header {
  position: relative;
  align-content: right;
}

#menu {
  position: relative;
  bottom: 0;
  left: 0;
  width: 3em;
  height: 3em;
  z-index: 1;
}

#spacer {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 3em;
  z-index: 255;
}

#contentContainer {
  position: absolute;
  bottom: 3em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: block;
}

#content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 0;
  max-height: 100vh;
  width: 100%;
  overflow-wrap: break-word;
  overflow-x: auto;
}

#footer {
  position: relative;
  width: 100%;
  height: 3em;
}

#input {
  height: 3em;
  position: absolute;
  bottom: 0;
  left: 3em;
  right: 3em;
}

#action {
  height: 3em;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 3em;
}

input[type="text"] {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

input[type="checkbox"] {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

button {
  width: 100%;
  height: 100%;
}

div.button {
  width: 3em;
  height: 3em;
}

div.column {
  height: 100%;
  position: relative;
}
</style>