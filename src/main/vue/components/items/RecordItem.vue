<template>
  <div class="record">
    <action-button label="🗑" @click="$store.dispatch('delete', key)" type="warning"/>
    <div class="label">{{ record }}</div>
  </div>
</template>
<script>
import actionButton from "./../ActionButton.vue";

export default {
  props: {
    record: {
      type: Object,
      required: true
    },
    key: {
      type: String,
      required: true
    }
  },
  components: {
    actionButton
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
  background-color: #ffcc00;
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
</style>
