<template>
  <div class="projects mt-2">
    <v-layout row wrap justify-start align-center fill-height v-if="!isLoading" >
      <v-flex xs12 md4 v-for="(item, i) in projects" :key="i">
        <Card :project="item" />
      </v-flex>
      <v-flex xs12 md12 v-if="projects.length < 1" class="mt-4 px-3">
        <v-alert
          :value="true"
          type="info"
        >
          No hay proyectos en esta categoria
        </v-alert>
      </v-flex>
    </v-layout>

    <v-alert
      class="mt-4 px-3"
      :value="isLoading"
      color="indigo"
    >
      Cargando proyectos...
    </v-alert>
  </div>
</template>

<script>
import Card from '../components/Card'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    loading: null
  }),
  computed: {
    ...mapGetters({
      isLoading: 'project/getIsLoading',
      projects: 'project/getProjects'
    })
  },
  methods: {
    getProjects () {
      this.$store.dispatch('project/handleLoading', true)
      this.$store.dispatch('project/getProjects')
      let watch = this.handleWatchAndLoading()
      setTimeout(() => {
        watch()
      }, 4000)
    },
    handleWatchAndLoading () {
      try {
        let watch = this.$store.watch((state, getters) => {
          if (!getters['project/getIsLoading']) {
            this.closeLoading(this.loading)
          }
        })
        return watch
      } catch (err) {
        this.closeLoading(this.loading)
      }
    },
    startLoading () {
      let loading = this.$vs.loading({
        color: 'dark',
        type: 'circles'
      })
      return loading
    },
    closeLoading (loading) {
      loading.close()
    }
  },
  mounted () {
    this.loading = this.startLoading()
    this.getProjects()
  },
  components: {
    Card
  }
}
</script>

<style>

</style>