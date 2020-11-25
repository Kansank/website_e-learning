<template>

    <div class="grid mt-8">
    <v-card
      v-for="course in result"
      :key="course.id"
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
        <v-btn color="orange lighten-2" >
          ขายดี
        </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    result: []
  },
  props:{
        
        courses:{
            type:Array,
            required:false
        }
    },
    asynData(context){
      return axios.get("https://e-learning-e58b4.firebaseio.com/data/courses.json")
      .then(res => {
        const data=[];
        for(const key in res.courses){
          data.push({...res.courses[key],id:key})
        }
        return {
          result:res.courses.json()
          }
      })
    }
};
</script>
<style>

</style>
