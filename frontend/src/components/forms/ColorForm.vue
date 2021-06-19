<template>
  <div class="d-flex align-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <v-icon :color="value" size="20px">mdi-circle</v-icon>
          <v-icon color="rgba(0, 0, 0, 0.6)" size="24px">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-color-picker hide-canvas hide-inputs show-swatches :value="value" @input="$emit('input', $event)"> </v-color-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'ColorForm',
  props: ['value'],
};
</script>
