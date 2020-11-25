<template>
  <div class="grid">
    <v-card
      v-for="manga in 10"
      :key="manga"
      class="mr-auto ml-auto"
      max-width="250"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title>
        Top western road trips
      </v-card-title>

      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          ขายดี
        </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false
  })
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: center;
 
}
</style>
