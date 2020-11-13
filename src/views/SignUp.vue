
<template>
  <div class="sign-up">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 md8>
        <v-card
          elevation="4"
          class="mx-auto mt-5"
        >
          <v-container>
            <v-card-title>
              <h4 style="text-align:center">Unete a Nosotros</h4>
            </v-card-title>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <Input title="Nombre" @handle-change = 'handleName' rules="nameRules" counter="10" class="my-2" required />
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <Input title="Primer Apellido" @handle-change = 'handleSurname1' class="my-2" />
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <Input title="Segundo Apellido" @handle-change = 'handleSurname2' class="my-2" />
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <Input title="Identificación" @handle-change = 'handleDni' class="my-2" />
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <Input title="Correo Electronico" type="email" @handle-change = 'handleEmail' class="my-2" rules="emailRules" required />
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <Input title="Contraseña" type="password" @handle-change = 'handlePassword' class="my-2" />
              </v-col>
            </v-row>

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