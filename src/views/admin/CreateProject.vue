<template>
  <div class="add-project">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 md10>
        <v-card
          elevation="4"
          class="mx-auto mt-5"
        >
          <v-card-title>
            <v-btn flat fab small color="blue accent-4" class="pt-2 pa-0">
              <v-icon dark>
                mdi-arrow-left 
              </v-icon>
            </v-btn>
            <h2>Agregar proyecto</h2>
          </v-card-title>

          <v-card-text>

            <v-alert 
              :value="true"
              type="info"
              color="#1e88e5"
              style="border-radius: 5px"
            >
              <span>
                El proceso para agregar el proyecto es sumamente sencillo.
                Nuestro proceso de onboarding te ayudara a configurarlo rapidamente. Estamos ansiosos porque te unas a nosotros!
              </span>
            </v-alert>
          </v-card-text>
          <h3 class="ml-4">
            <strong>Datos del proyecto</strong>
          </h3>
          <v-card-text>
            <Input title="Nombre Proyecto" @handle-change = 'handleNameProject' class="my-2" icon="bx bxs-folder" />
            <v-textarea
              box
              name="input-7-4"
              label="Descripcion"
              @keyup="handleDescriptionProject"
              :value="project.description"
              v-model="project.description"
            ></v-textarea>

            <vs-select filter placeholder="Seleccionar categoria" v-model="project.category" class="select-input">
              <vs-option v-for="(item, i) in categories" :key="i" :label="item.name" :value="item._id" >
                {{ item.name }}
              </vs-option>
            </vs-select>
          </v-card-text>

          <v-card-actions class="pt-4">
            <vs-button
              block
              @click="handleSubmit"
            >
              <span style="font-size: 1rem">
                <i class='bx bxs-save'></i> Crear proyecto
              </span>
            </vs-button>
          </v-card-actions>       
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Input from '../../components/Input'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    project: {
      name: '',
      description: '',
      category: ''
    }
  }),
  computed: {
    ...mapGetters({
      categories: 'category/getCategories'
    })
  },
  methods: {
    handleNameProject (name) {
      this.project.name = name
    },
    handleDescriptionProject (e) {
      this.project.description = e.target.value
    },
    getCategories () {
      this.$store.dispatch('category/getCategories')
    },
    handleSubmit () {
      this.$store.dispatch('project/storeProject', this.project)
    }
  },
  components: {
    Input
  },
  mounted () {
    this.getCategories()
  }
}
</script>

<style>

</style>