<template>
<button @click="$emit('click')" :class="['pure-button', type]" :disabled="disabled">{{ label }}</button>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    }
  }
};
</script>
<style scoped>
button {
  width: 3em;
  height: 3em;
  display: inline-block;
  letter-spacing: 0;
  word-spacing: 0;
}
</style>