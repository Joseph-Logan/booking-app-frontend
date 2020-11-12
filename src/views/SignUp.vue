
<template>
  <div class="sign-in container-fluid d-flex justify-content-center">
   <v-layout row wrap justify-center align-center>
      <v-flex xs12 md6>
      <v-card
        elevation="4"
        class="mx-auto mt-10"
        min-width="400px"
      >
        <v-container>
          <v-card-title>
            <h4 style="text-align:center">Unete a Nosotros</h4>
          </v-card-title>
         
              <Input title="Nombre" @handle-change = 'handleName' rules="nameRules" counter="10" required/>
              <Input title="Primer Apellido" @handle-change = 'handleSurname1' />
              <Input title="Segundo Apellido" @handle-change = 'handleSurname2' />
              <Input title="Identificación" @handle-change = 'handleDni' />
              <Input title="Correo Electronico" type="email" @handle-change = 'handleEmail' rules="emailRules" required />
              <Input title="Contraseña" type="password" @handle-change = 'handlePassword' />

          <v-card-actions class="d-flex justify-content-end">
          <vs-button 
            :loading="isLoading"
            border
            @click="handleSubmit"
          >
            Registrarse 
          </vs-button>
        </v-card-actions>
        </v-container>
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
    valid:true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    firstSurName: '',
    secondSurName: '',
    dni: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
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
     validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
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