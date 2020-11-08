
<template>
  <div class="sign-in container-fluid">
     <v-layout row wrap justify-center align-center>
      <v-flex xs12 md6>
        <v-card
          elevation="4"
          class="mx-auto mt-10"
        >
          <v-card-title>
            <h4>Unete a Nosotros</h4>
          </v-card-title>

          <v-card-text>
            <Input title="Nombre" @handle-change = 'handleName' class="my-2" />
            <Input title="Primer Apellido" @handle-change = 'handleSurname1' class="my-2" />
            <Input title="Segundo Apellido" @handle-change = 'handleSurname2' class="my-2" />
            <Input title="Identificación" @handle-change = 'handleDni' class="my-2" />
            <Input title="Correo Electronico" type="email" @handle-change = 'handleEmail' class="my-2" />
            <Input title="Contraseña" type="password" @handle-change = 'handlePassword' class="my-2" />
          </v-card-text>

          <v-card-actions class="d-flex justify-content-end">
            <vs-button 
              :loading="isLoading"
              border
              @click="handleSubmit"
            >
              Registrarse 
            </vs-button>
          </v-card-actions>
        </v-card>
      </v-flex>
     </v-layout>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    name: null,
    firstSurName: null,
    secondSurName: null,
    dni: null,
    email: null,
    password: null,
    loading: false
  }),
  computed: {
    ...mapGetters({
      isLoading: 'auth/getIsLoading',
      message: 'auth/getMessage',
      status: 'auth/getStatus'
    })
  },
  components: {
    Input
  },
  methods: {
    handleName (name) {
      this.name = name
    },
    handleSurname1(firstSurName){
      this.firstSurName = firstSurName
    },
    handleSurname2(secondSurName){
      this.secondSurName = secondSurName
    },
    handleDni(dni){
      this.dni = dni
    },
    handleEmail(email){
      this.email = email
    },
    handlePassword(password){
      this.password = password
    },
    handleSubmit () {
      //this.$store.dispatch('auth/handleLoading', true)

      let data = {
        name: this.name,
        firstSurName: this.firstSurName,
        secondSurName: this.secondSurName,
        dni: this.dni,
        email: this.email,
        password: this.password
      }
      console.log(data)
      //this.$store.dispatch('auth/signIn', data)

      //this.handleWatch()
    },
    handleWatch () {
      let watch = this.$store.watch((state, getters) => {
        if (!getters['auth/getIsLoading']) {
          this.handleNotify(this.status ,'Mensaje', this.message)
        }
      })

      setTimeout(() => {
        watch()
      }, 1000)
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
  }
}
</script>

<style>

</style>