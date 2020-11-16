<template>
  <div class="dashboard-admin pt-1">
    <!-- <v-layout row wrap>
      <v-flex md4 class="hidden-md-and-down">
        <CardInfo />
      </v-flex>

      <v-flex md4 class="hidden-md-and-down">
        <CardInfo />
      </v-flex>

      <v-flex md4 class="hidden-md-and-down">
        <CardInfo />
      </v-flex>
    </v-layout> -->

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
      <v-flex xs12 md3 v-for="(project, i) in projects" :key="i">
        <Card :project="project" />
        <v-alert
          v-if="project.isEnabled"
          :value="true"
          color="green"
          icon="check_circle"
          class="pa-1 mx-2"
        >
          <v-layout row justify-between>
            <v-flex class="pt-2-5">This project is running</v-flex>
            <v-menu class="dashboard-option">
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  icon
                  v-on="on"
                >
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-tile
                  v-for="(item, i) in items"
                  :key="i"
                  @click="handleOption(item.id, project)"
                >
                  <v-list-tile-title>
                    <span :class="item.id == 2 ? 'text-danger' : ''">
                      {{ item.title }}
                    </span>
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-layout>
        </v-alert>

        <v-alert
          class="mx-2 pa-1"
          v-else
          :value="true"
          color="yellow darken-2"
          icon="priority_high"
        >
          <v-layout row justify-between>
            <v-flex class="pt-2-5">This is a warning alert.</v-flex>
          
            <v-menu class="dashboard-option" style="top: 0; left: 0; ">
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  icon
                  v-on="on"
                >
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-tile
                  v-for="(item, i) in items"
                  :key="i"
                  @click="handleOption(item.id, project)"
                >
                  <v-list-tile-title> 
                    <span :class="item.id == 2 ? 'text-danger' : ''">
                      {{ item.title }}
                    </span>
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-layout>
        </v-alert>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialogMembership"
      width="500"
    >
      <v-card>
        <v-card-title
          dark
          class="headline blue text-white"
          primary-title
        >
          Activar Membresia
        </v-card-title>

        <v-card-text>
          <v-text-field label="Codigo de activacion" v-model="membershipCode"></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            dark
            color="blue"
            :loading="isLoadingMembership"
            @click="handleActiveMembership"
          >
            Activar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import CardInfo from '@/components/CardInfo'
import Card from '@/components/Card'
import { mapGetters } from 'vuex'
import {
  BAD_REQUEST,
  OK
} from '@/utils/constant'

export default {
  beforeCreate  () {
    document.body.className = 'default-color' 
  },
  data: () => ({
    loading: '',
    items: [
      { id: 1, title: 'Editar' },
      { id: 2, title: 'Eliminar' },
      { id: 0, title: 'Activar Membresia' },
    ],
    dialogMembership: false,
    membershipCode: '',
    projectId: ''
  }),
  computed: {
    ...mapGetters({
      isLoadingMembership: 'membership/getIsLoading',
      isLoading: 'project/getIsLoading',
      projects: 'project/getProjects'
    })
  },
  methods: {
    handleRedirect (route) {
      this.$router.push(route)
    },
    handleOption (option, project) {
      
      switch (option) {
        case 0:
          this.dialogMembership = true;
          break;
      }

      this.projectId = project._id
    },
    async handleActiveMembership () {
      let data = {
        project: this.projectId,
        membership: this.membershipCode
      }
      this.$store.dispatch('membership/handleLoading', true)
      let resp = await this.$store.dispatch('membership/activeProjectAndMembership', data)
      
      if (resp.status === BAD_REQUEST) {
        this.handleNotify(BAD_REQUEST, '<h2>Error</h2>' , `<h2>${resp.data.errors[0].message}</h2>`)
        return
      }
      this.handleNotify(OK, '<h2>Mensaje</h2>' , `<h2>Membresia activada</h2>`)
      this.getProjectByUser()
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
    },
    handleNotify (status, title, text) {
      if (status === 200) {
        this.$vs.notification({
          title, 
          text, 
          position: 'top-center', 
          color: 'primary'
        })
        return
      }
      let color = 'danger'
      this.$vs.notification({
        title: title, 
        text: text, 
        position: 'top-right', 
        color: color, 
      })
    },
  },
  components: {
    // CardInfo,
    Card
  },
  mounted () {
    this.loading = this.startLoading()
    this.getProjectByUser()
  }
}
</script>

<style>
  .pt-2-5 {
    padding-top: 12px;
  }
  .text-danger {
    color: #ef5350;
  }
  .text-white {
    color: white;
  }
</style>