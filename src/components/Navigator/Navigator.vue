<template>
  <div class="navbar">
    <vs-navbar shadow square center-collapsed v-model="active">

      <template #left v-if="isAuthenticatedUser">
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class='bx bx-menu'></i>
        </vs-button>
      </template>

      <vs-navbar-item :active="active == 'home'" id="home" @click="goToRoute('Home')">
        Home
      </vs-navbar-item>

      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>

      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>

      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>

      <template #right>
        <div class="d-flex" v-if="!isAuthenticatedUser">
          <vs-button @click="goToRoute('SignIn')">
            Iniciar sesion 
            <i class="ml-1 bx bx-user bx-l"></i>
          </vs-button>
          <vs-button flat @click="goToRoute('SignUp')">
            Unete a nosotros 
            <i class="ml-1 bx bx-shopping-bag bx-l"></i>
          </vs-button>
        </div>

        <v-menu offset-y v-else>
          <template v-slot:activator="{ on }">
            <v-avatar 
              color="indigo" 
              v-on="on"
              size="35px"
            >
              <span class="white--text">{{ userAuth }}</span>
            </v-avatar>
          </template>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="handleOptionSession(item)"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </template>
      <div v-if="activeDialog" ><Dialog :activeDialog="activeDialog" /></div>

    </vs-navbar>
    
    <vs-sidebar
      absolute
      v-model="active"
      :open.sync="activeSidebar"
      v-if="isAuthenticatedUser"
      >
      <template #logo>
        <img alt="Vue logo" src="../../assets/logo.png">
      </template>

      <SidebarEmptyProjectOption v-if="!isUserHasProjects" />
      <SidebarWithProjectOption v-if="isUserHasProjects" />

      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class='bx bx-bell' ></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
    
  </div>
</template>

<script>
import Storage from '../../utils/storage'
import { isAuthenticated } from '../../utils/authenticate'
import SidebarEmptyProjectOption from './SidebarEmptyProjects'
import SidebarWithProjectOption from './SidebarWithProjects'
import Dialog from '../Dialog'

export default {
  data: () => ({
    active: 'home',
    activeSidebar: false,
    items: [
      { id: 1, title: 'Mi perfil' },
      { id: 0, title: 'Cerrar session' },
    ],
    isAuthenticatedUser: false,
    userAuth: null,
    isUserHasProjects: false,
    
    activeDialog: false
  }),
  methods: {
    goToRoute(name) {
      this.$router.push({name})
    },
    handleOptionSession(item) {
      if(item.id == 0){
        localStorage.clear()
        window.location = '/'
        return
      }
      this.activeDialog = false
      this.activeDialog = true
    },
    activeDialog(){
      return this.activeDialog
    },
    configAvatar() {
      let user = JSON.parse(Storage.getItem('user'))
      if (user) {
        this.userAuth = user.name.charAt(0)
      }
    },
    async isUserProjects () {
      let user = JSON.parse(Storage.getItem('user'))
      if (user) {
        this.isUserHasProjects = user.projects.length > 0 ? true : false
        console.log(user.projects.length, 'tmano')
      }
    },
    async getIsAuthenticated () {
      try {
        this.isAuthenticatedUser = isAuthenticated()
        this.configAvatar()
      } catch (err) {
        this.isAuthenticatedUser = false
      }
    },
  },
  components: {
    SidebarEmptyProjectOption,
    SidebarWithProjectOption,
    Dialog
  },
  async mounted () {
    await this.getIsAuthenticated()
    await this.isUserProjects()
  }
}
</script>

<style>

</style>