<template>
  <div class="add-project">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 md10>
        <v-card
          elevation="4"
          class="mx-auto mt-5"
        >
          <v-card-title>
            <h2>Agregar proyecto</h2>
          </v-card-title>

          <v-card-text>

            <v-alert 
              :value="true"
              color="#4285f4"
              style="border-radius: 5px"
            >
              <span>
                El proceso para agregar el proyecto es sumamente sencillo.
                Nuestro proceso de onboarding te ayudara a configurarlo rapidamente. Estamos ansiosos porque te unas a nosotros!
              </span>
            </v-alert>
            
            <!-- <vs-alert gradient >
              <template #title>
                De parte del equipo de Guanabooking!
              </template>
              <span>
                El proceso para agregar el proyecto es sumamente sencillo.
                Nuestro proceso de onboarding te ayudara a configurarlo rapidamente. Estamos ansiosos porque te unas a nosotros!
              </span>
            </vs-alert> -->
          </v-card-text>
          <h3 class="ml-4">
            <strong>Datos del proyecto</strong>
          </h3>
          <v-card-text>
            
            <Input title="Nombre Proyecto" @handle-change = 'handleNameProject' class="my-2" icon="bx bxs-folder" />
          </v-card-text>          

        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Input from '../../components/Input'

export default {
  data: () => ({
    project: {
      name: '',
      description: '',
      category: ''
    }
  }),
  methods: {
    handleNameProject (name) {
      this.project.name = name
    }
  },
  components: {
    Input
  }
}
</script>

<style>

</style>