<template>
  <div class="projects">
    <v-layout row wrap justify-start align-center fill-height>
      <v-flex xs12 md4>
        <Card />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Card from '../components/Card'
import { mapGetters } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters({

    })
  },
  methods: {
    getProjects () {
      this.$store.dispatch('project/getProjects')
    }
  },
  mounted () {

  },
  components: {
    Card
  }
}
</script>

<style>

</style>