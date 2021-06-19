<template>
  <v-textarea filled rounded auto-grow :value="value" @input="$emit('input', $event)" placeholder="詳細" rows="4"> </v-textarea>
</template>

<script>
export default {
  name: 'TimeForm',
  props: ['value'],
};
</script>
