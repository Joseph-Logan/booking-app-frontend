<template>
  <div class="m-2">
    <v-card>
      <v-img
        :src="project.urlImagePath"
        height="250px"
      >
        <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">{{ project.name }}</span>
              </v-flex>
            </v-layout>
          </v-container>
      </v-img>

      <v-card-title primary-title>
        <div>
          <div class="headline">{{ project.description }}</div>
          <span class="grey--text">
            <v-chip color="indigo" text-color="white">{{ project.category.name }}</v-chip>
          </span>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="purple">Explore</v-btn>
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