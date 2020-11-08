<template>
  <div class="m-2">
    <v-card >
      <v-img
        src="/images/default.jpg"
        height="250px"
      >
        <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
      </v-img>

      <v-card-title primary-title>
        <div>
          <div class="headline">Top western road trips</div>
          <span class="grey--text">1,000 miles of wonder</span>
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
  data: () => ({
    show: false
  })
}
</script>

<style>

</style>