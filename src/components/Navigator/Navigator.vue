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

      <!-- Config sidebar when user has empty project -->
      <div class="option-empty-project" v-if="!isUserHasProjects">
        <vs-sidebar-item id="home" to="add-project">
          <template #icon>
            <i class='bx bxs-folder'></i>
          </template>
          Agregar mi primer proyecto
        </vs-sidebar-item>
      </div>

      <!-- Config sidebar when user has projects -->

      <div class="sidebar-with-project" v-if="isUserHasProjects">
        <vs-sidebar-item id="market" to="dashboard-admin">
          <template #icon>
            <i class='bx bxs-folder'></i>
          </template>
          Mis Proyectos
        </vs-sidebar-item>
        <!-- <vs-sidebar-item id="Music">
          <template #icon>
            <i class='bx bxs-coin-stack'></i>
          </template>
          Test
        </vs-sidebar-item> -->
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bxs-coin-stack'></i>
              </template>
              Obtener Membresia
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="purchase" to="purchase">
            <template #icon>
              <i class='bx bxs-credit-card-alt' ></i>
            </template>
            Comprar Membresia
          </vs-sidebar-item>

          <vs-sidebar-item id="membership" to="membership">
            <template #icon>
              <i class='bx bx-file' ></i>
            </template>
            Ver Membresias
          </vs-sidebar-item>

          <vs-sidebar-item id="ActivarMembresia">
            <template #icon>
              <i class='bx bx-file' ></i>
            </template>
            Activar Membresia
          </vs-sidebar-item>

        </vs-sidebar-group>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bxs-food-menu' ></i>
              </template>
              Productos
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="github">
            <template #icon>
              <i class='bx bxl-github' ></i>
            </template>
            Github
          </vs-sidebar-item>
          <vs-sidebar-item id="codepen">
            <template #icon>
              <i class='bx bxl-codepen'></i>
            </template>
            Codepen
          </vs-sidebar-item>
          <vs-sidebar-item id="discord">
            <template #icon>
              <i class='bx bxl-discord'></i>
            </template>
            Discord
          </vs-sidebar-item>
          <vs-sidebar-item id="Javascript">
            <template #icon>
              <i class='bx bxl-javascript' ></i>
            </template>
            Javascript
          </vs-sidebar-item>
          <vs-sidebar-item id="git">
            <template #icon>
              <i class='bx bxl-git' ></i>
            </template>
            Git
          </vs-sidebar-item>
        </vs-sidebar-group>
      </div>

      <template #footer>
        <vs-row justify="space-between">
          <v-avatar 
            color="indigo" 
            size="35px"
          >
            <span class="white--text">{{ userAuth }}</span>
          </v-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class='bx bx-bell'></i>
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
    isUserHasProjects: false
  }),
  methods: {
    goToRoute(name) {
      this.$router.push({name})
    },
    handleOptionSession(item) {
      console.log(item)
      localStorage.clear()
      window.location = '/'
    },
    configAvatar() {
      let user = JSON.parse(Storage.getItem('user'))
      if (user) {
        this.userAuth = user.name.charAt(0).toUpperCase()
      }
    },
    async isUserProjects () {
      let user = JSON.parse(Storage.getItem('user'))
      if (user) {
        this.isUserHasProjects = user.projects.length > 0 ? true : false
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
    handleClick () {
      console.log('any')
    }
  },
  async mounted () {
    await this.getIsAuthenticated()
    await this.isUserProjects()
  }
}
</script>

<style>

</style>