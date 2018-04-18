<template>
  <div class="record">
    <div id="left" class="button">
      <button class="pure-button warning" @click="store.dispatch('deleteRecord', record.id)">🗑</button>
    </div>
    <div class="label">{{ record.label }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'record', 'store'
  ]
};
</script>

<style>
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
</style>
