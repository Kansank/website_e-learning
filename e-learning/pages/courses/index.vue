<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12" sm="2">
          <v-subheader v-text="'หมวดหมู่คอร์สเรียน'"></v-subheader>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            v-model="e6"
            :items="states"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            chips
            hint="Pick your favorite states"
            persistent-hint
          ></v-select>
        </v-col>

        <v-col cols="12" sm="2">
          <v-subheader v-text="'ราคาคอร์สเรียน'"></v-subheader>
        </v-col>

        <v-col cols="12" sm="4">
          <v-select
            v-model="e7"
            :items="states"
            label="Select"
            multiple
            chips
            hint="What are the target regions"
            persistent-hint
          ></v-select>
        </v-col>

        <v-col cols="12" sm="2">
          <v-subheader v-text="'คำบรรยาย'"></v-subheader>
        </v-col>

        <v-col cols="12" sm="4">
          <v-select
            v-model="e8"
            :items="states"
            label="Select"
            multiple
            chips
            hint="What are the target regions"
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>



    <div class="grid mt-8">
    <v-card
      v-for="course of courses.courses"
      :key="course.id"
      class="mr-auto ml-auto"
      max-width="250"
    >
      <v-img
        :src="require(course.image)"
        height="200px"
      ></v-img>

      <v-card-title>
        {{ course.name }}
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
    
   
  </div>
</template>

<script>


import CourseList from "@/components/CourseList";

export default {
  components: {
    CourseList
  },
 
  data() {
    return {
      e6: [],
      e7: [],
      e8: [],
      states: ["Alabama", "Alaska", "Wisconsin", "Wyoming"],
      courses: []
    };
  },
    async fetch() {
      this.courses = await fetch(
        'https://e-learning-e58b4.firebaseio.com/data/courses.json'
      ).then(res => res.json())
    }
}
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
