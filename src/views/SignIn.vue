<template>
  <div class="sign-in container-fluid d-flex justify-content-center">
    <v-card
      elevation="4"
      class="mx-auto mt-5"
      min-width="400px"
    >
      <v-card-title>
        <h4>Iniciar sesion</h4>
      </v-card-title>

      <v-card-text>
        <Input title="Email" @handle-change = 'handleEmail' class="my-2" icon="bx bx-user" />
        <Input title="Password" type="password" @handle-change = 'handlePassword' class="my-2 w-100" icon="bx bx-lock-open-alt" />
      </v-card-text>

      <v-card-actions class="d-flex justify-content-end">
        <vs-button 
          :loading="loading"
          border
          @click="handleSubmit"
        >
          Inciar sesion
        </vs-button>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Input from '../components/Input'

export default {
  data: () => ({
    email: null,
    password: null,
    loading: false
  }),
  components: {
    Input
  },
  methods: {
    handleEmail (value) {
      this.email = value
    },
    handlePassword (value) {
      this.password = value
    },
    handleSubmit () {
      this.loading = true
      let data = {
        email: this.email,
        password: this.password
      }
      console.log(data)

      setTimeout(() => {
        this.loading = false
      }, 2000);

    }
  }
}
</script>

<style>

</style>