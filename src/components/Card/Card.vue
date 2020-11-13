<template>
  <div class="m-2">
    <v-card>
      <v-layout row wrap @click="alert('card')">
        <v-flex xs5>
          <v-img
            :src="project.urlImagePath"
            height="250px"
          >
          </v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title class="px-1">
            <div class="headline text-capitalize mb-3">{{ project.name }}</div>
            <div class="subheading text-truncate">{{ project.description }}</div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="purple">Explore</v-btn>
        <v-spacer></v-spacer>
        <span class="grey--text my-2">
          <v-chip color="indigo" text-color="white">{{ project.category.name }}</v-chip>
        </span>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style>

</style>