
<template>
  <div class="sign-up">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 md8>
        <v-card
          elevation="4"
          class="mx-auto mt-5"
        >
            <v-card-title>
              <h4 style="text-align:center">Unete a Nosotros</h4>
            </v-card-title>
            <v-card-text>
              <Input title="Nombre" @handle-change = 'handleName' rules="nameRules" counter="10" class="my-2" icon="bx bx-user-circle" v-bind:isValid="isValidName" />
            
              <Input title="Primer Apellido" @handle-change = 'handleSurname1' class="my-2" icon="bx bx-user-circle" v-bind:isValid="isValidFirstSurName"/>
            
              <Input title="Segundo Apellido" @handle-change = 'handleSurname2' class="my-2" icon="bx bx-user-circle" v-bind:isValid="isValidSecondSurName"/>
          
              <Input title="Identificación" @handle-change = 'handleDni' class="my-2" icon="bx bxs-id-card" v-bind:isValid="isValidDni"/>
            
              <Input title="Correo Electronico" type="email" @handle-change = 'handleEmail' class="my-2" rules="emailRules" icon="bx bx-envelope" v-bind:isValid="isValidEmail" />
            
              <Input title="Contraseña" type="password" @handle-change = 'handlePassword' class="my-2" icon="bx bx-lock-open-alt" v-bind:isValid="isValidPassword"/>
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
    valid:true,
    name: '',
    firstSurName: '',
    secondSurName: '',
    dni: '',
    email: '',
    password: '',
    loading: false,

    isValidName: false,
    isValidFirstSurName: false,
    isValidSecondSurName: false,
    isValidDni: false,
    isValidEmail: false,
    isValidPassword: false

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
    validName(value){
      return /^[a-z-A-Z\D]{1,40}$/.test(value)
    },
    handleName (name) {
      this.isValidName = this.validName(name)
      this.name = name
    },
    validFirstSurName(value){
      return /^[a-z-A-Z\D]{1,40}$/.test(value)
    },
    handleSurname1(firstSurName){
      this.isValidFirstSurName = this.validFirstSurName(firstSurName)
      this.firstSurName = firstSurName
    },
    validSecondSurName(value){
      return /^[a-z-A-Z\D]{1,40}$/.test(value)
    },
    handleSurname2(secondSurName){
      this.isValidSecondSurName = this.validSecondSurName(secondSurName)
      this.secondSurName = secondSurName
    },
    validDNI(value){
      return /^[1-9]-?\d{4}-?\d{4}$/.test(value)
    },
    handleDni(dni){
      this.isValidDni = this.validDNI(dni)
      this.dni = dni
    },
    validEmail(value) {
     return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    },
    handleEmail(email){
      this.isValidEmail = this.validEmail(email)
      this.email = email
    },
    validPassword(value){
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/.test(value)
    },
    handlePassword(password){
      this.isValidPassword = this.validPassword(password)
      this.password = password
    },
    handleSubmit () {
      if(this.isValidEmail && this.isValidPassword && this.isValidName && this.isValidFirstSurName && this.isValidSecondSurName && this.isValidDni){
        this.$store.dispatch('auth/handleLoading', true)

        this.$store.dispatch('auth/signUp', this.getProperties())
        this.handleWatch()
      }
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
      if (status === 200 || status === 201) {
        this.$vs.notification({
          title, 
          text, 
          position: 'top-center', 
          color: 'primary'
        })
        this.goToRoute('SignIn')
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
    goToRoute(name) {
      this.$router.push({name})
    }
  }
}
</script>

<style>

</style>