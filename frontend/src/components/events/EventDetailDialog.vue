<template>
  <v-card class="pb-12">
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="edit">
        <v-icon size="20px">mdi-pencil-outline</v-icon>
      </v-btn>
      <v-btn icon @click="del">
        <v-icon size="20px">mdi-trash-can-outline</v-icon>
      </v-btn>
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-title>
      <DialogSection icon="mdi-square" :color="event.color">
        {{ event.name }}
      </DialogSection>
    </v-card-title>
    <v-card-text>
      <DialogSection icon="mdi-clock-time-three-outline">
        {{ event.startDate }} {{ event.timed ? event.startTime : '' }} ~ {{ event.endDate }} {{ event.timed ? event.endTime : '' }}
      </DialogSection>
    </v-card-text>
    <v-card-text>
      <DialogSection icon="mdi-card-text-outline">
        {{ event.description || 'no description' }}
      </DialogSection>
    </v-card-text>
    <v-card-text>
      <DialogSection icon="mdi-calendar">{{ event.calendar.name }}</DialogSection>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DialogSection from '../layouts/DialogSection';

export default {
  name: 'EventDetailDialog',
  components: {
    DialogSection,
  },
  computed: {
    ...mapGetters('events', ['event']),
  },
  methods: {
    ...mapActions('events', ['setEvent', 'deleteEvent', 'setEditMode']),
    closeDialog() {
      this.setEvent(null);
    },
    del() {
      this.deleteEvent(this.event.id);
    },
    edit() {
      this.setEditMode(true);
    },
  },
};
</script>
