<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" :class="{ 'red lighten-4 rounded': isError }">
        {{ formatDateToJa(value) || '日付を選択' }}
      </v-btn>
    </template>

    <v-date-picker
      :value="value.replace(/\//g, '-')"
      @input="$emit('input', $event.replace(/-/g, '/'))"
      no-title
      locale="ja-ja"
      :day-format="value => new Date(value).getDate()"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import { formatDateToJa } from '../../functions/datetime';

export default {
  name: 'DateForm',
  props: ['value', 'isError'],
  methods: {
    formatDateToJa,
  },
};
</script>
