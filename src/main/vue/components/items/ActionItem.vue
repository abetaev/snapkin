<template>
  <action-button :label="record.label" @click="exec(record)" type="wide"/>
</template>
<script>
import actionButton from './../ActionButton.vue'

export default {
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  components: {
    actionButton
  },
  methods: {
    exec(record) {
      console.log(record)
      record.action();
    }
  }
};
</script>
<style scoped>
div.button {
  width: 3em;
  height: 3em;
  text-align: center;
  display: table-cell;
}

button.warning:hover {
  background-color: #FFCC00;
  border-radius: 4px;
}

#left {
  position: absolute;
  left: 0;
}

#right {
  position: absolute;
  right: 0em;
}

div.label {
  position: absolute;
  height: 3em;
  left: 3em;
  right: 0em;
  display: inline-block;
}

div.record {
  height: 3em;
  width: 100%;
  border-top-width: 0.07em;
  border-top-style: dashed;
  border-top-color: black;
}

button.wide {
  width: 100%;
}
</style>
