
<template>
  <div class="sign-in container-fluid d-flex justify-content-center">
    <v-card
      elevation="4"
      class="mx-auto mt-10"
      min-width="400px"
    >
      <v-card-title>
        <h4>Unete a Nosotros</h4>
      </v-card-title>

      <v-card-text>
        <Input title="Nombre" @handle-change = 'handleName' />
        <Input title="Primer Apellido" @handle-change = 'handleSurname1' />
        <Input title="Segundo Apellido" @handle-change = 'handleSurname2' />
        <Input title="Identificación" @handle-change = 'handleDni' />
        <Input title="Correo Electronico" type="email" @handle-change = 'handleEmail' />
        <Input title="Contraseña" type="password" @handle-change = 'handlePassword' />
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
      this.$store.dispatch('auth/handleLoading', true)

      this.$store.dispatch('auth/signUp', this.getProperties())

      this.handleWatch()
    },
    getProperties(){
      return {
        name: this.name,
        firstSurname: this.firstSurName,
        secondSurname: this.secondSurName,
        dni: this.dni,
        email: this.email,
        password: this.password
      }
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