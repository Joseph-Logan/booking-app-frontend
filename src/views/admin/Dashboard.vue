<template>
  <div class="dashboard-admin pt-1">
    <v-layout row wrap>
      <v-flex md4 class="hidden-md-and-down">
        <CardInfo />
      </v-flex>

      <v-flex md4 class="hidden-md-and-down">
        <CardInfo />
      </v-flex>

      <v-flex md4 class="hidden-md-and-down">
        <CardInfo />
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-start align-center fill-height class="">
      <v-flex xs12>
        <v-card
          elevation="0"
          class="mt-3 mx-2"
         >
          <v-card-title>
            <v-spacer></v-spacer>
            <vs-button
              square
              size="large"
              @click="handleRedirect('add-project')"
            >
              <v-icon class="white--text mr-3">mdi-plus</v-icon> Agregar proyecto
            </vs-button>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-start align-center fill-height class="mt-2">
      <v-flex xs12 md3 v-for="(item, i) in projects" :key="i">
        <Card :project="item" />
        <v-alert
          v-if="item.isEnabled"
          :value="true"
          color="green"
          icon="check_circle"
        >
          This project is running
        </v-alert>

        <v-alert
          class="mx-2"
          v-else
          :value="true"
          color="yellow darken-2"
          icon="priority_high"
        >
          This is a warning alert.
        </v-alert>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CardInfo from '@/components/CardInfo'
import Card from '@/components/Card'
import { mapGetters } from 'vuex'
 
export default {
  beforeCreate  () {
    document.body.className = 'default-color' 
  },
  data: () => ({
    loading: ''
  }),
  computed: {
    ...mapGetters({
      isLoading: 'project/getIsLoading',
      projects: 'project/getProjects'
    })
  },
  methods: {
    handleRedirect (route) {
      this.$router.push(route)
    },
    getProjectByUser () {
      this.$store.dispatch('project/handleLoading', true)
      this.$store.dispatch('project/getProjectsByUserId')

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
  components: {
    CardInfo,
    Card
  },
  mounted () {
    this.loading = this.startLoading()
    this.getProjectByUser()
  }
}
</script>

<style>

</style>