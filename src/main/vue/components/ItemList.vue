<template>
  <div>
  </div>
</template>
<script>
import actionItem from "./items/ActionItem.vue";
import recordItem from "./items/RecordItem.vue";

export default {
  props: {
    records: {
      type: Array
    }
  },
  components: {
      actionItem, 
      recordItem
  }
};
</script>
