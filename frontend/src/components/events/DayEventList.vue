<template>
  <v-card class="pb-8">
    <v-card-actions class="d-flex justify-end">
      <v-btn icon @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-title class="d-flex justify-center">
      {{ formatDateToJa(clickedDate) }}
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="event in dayEvents" :key="event.id">
          <v-list-item-content class="pa-0">
            <v-btn depressed :color="event.color" class="white--text justify-start">
              <template v-if="event.timed">{{ event.startTime }}</template>
              {{ event.name }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { formatDateToJa } from '../../functions/datetime';

export default {
  name: 'DayEventList',
  computed: {
    ...mapGetters('events', ['dayEvents', 'clickedDate']),
  },
  methods: {
    ...mapActions('events', ['setClickedDate']),
    formatDateToJa,
    closeDialog() {
      this.setClickedDate(null);
    },
  },
};
</script>
