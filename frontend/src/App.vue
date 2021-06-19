<template>
  <v-app>
    <v-main>
      <Calendar />
    </v-main>
  </v-app>
</template>

<script>
import Calendar from './components/pages/Calendar';

export default {
  name: 'App',
  components: {
    Calendar,
  },
};
</script>
