<template>
  <div class="projects mt-2">
    <v-layout row wrap justify-start align-center fill-height v-if="!isLoading" >
      <v-flex xs12 md4 v-for="(item, i) in projects" :key="i">
        <Card :project="item" />
      </v-flex>
      <v-flex xs12 md12 v-if="projects.length === 0" class="mt-4 px-3">
        <v-alert 
          :value="true"
          type="info"
        >
          No hay proyectos en esta categoria
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row fill-height ref="content" style="height: 300px" v-if="isLoading"/>
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
      }, 1000)
    },
    handleWatchAndLoading () {
      let loading = this.startLoading()
      try {
        let watch = this.$store.watch((state, getters) => {
          if (!getters['project/getIsLoading']) {
            this.closeLoading(loading)
          }
        })
        return watch
      } catch (err) {
         this.closeLoading(loading)
      }
    },
    startLoading () {
      let loading = this.$vs.loading({
        target: this.$refs.content,
        color: 'dark',
        type: 'circles'
      })
      return loading
    },
    closeLoading (loading) {
      loading.close()
    }
  },
  updated () {
    this.handleWatchAndLoading()
  },
  mounted () {
    this.getProjects()
  },
  components: {
    Card
  }
}
</script>

<style>

</style>