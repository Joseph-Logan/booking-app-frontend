<template>
  <v-card
    class="mt-1 mx-auto"
    max-width="500"
    elevation="0"
  >
    <v-sheet
      class="v-sheet--offset mx-auto pl-3 py-2"
      color="blue"
      elevation="12"
      max-width="calc(100% - 25px)"
      dark
    >
      <v-layout row>
        <v-flex xs2>
          <v-icon x-large>mdi-folder-cog-outline</v-icon>
        </v-flex>
        <v-flex xs10>
          <div class="title">Proyecto activos</div>
          <span class="headline">10</span>
        </v-flex>
      </v-layout>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">User Registrations</div>
      <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
  .v-sheet--offset {
    top: -10px;
    position: relative;
  }
</style>