<template>
  <div class="sign-in container-fluid">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 md6>
        <v-card
          elevation="4"
          class="mx-auto mt-5"
        >
          <v-card-title>
            <h4>Iniciar sesion</h4>
          </v-card-title>

          <v-card-text>
            <Input title="Correo" @handle-change = 'handleEmail' class="my-2" icon="bx bx-user" v-bind:isValid="isValidEmail" />
            <Input title="Password" type="password" @handle-change = 'handlePassword' class="my-2 w-100" icon="bx bx-lock-open-alt" v-bind:isValid="isValidPassword" />
          </v-card-text>

          <v-card-actions class="d-flex justify-content-end">
            <vs-button 
              :loading="isLoading"
              border
              @click="handleSubmit"
            >
              Inciar sesion
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
    email: null,
    password: null,
    loading: false,
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
    validEmail(value) {
     return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    },
    handleEmail (value) {
      this.isValidEmail = this.validEmail(value)
      this.email = value
    },
    validPassword(value){
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/.test(value)
    },
    handlePassword (value) {
      this.isValidPassword = this.validPassword(value)
      this.password = value
    },
    handleSubmit () {
      if(this.isValidEmail && this.isValidPassword){
        this.$store.dispatch('auth/handleLoading', true)
        let data = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('auth/signIn', data)

        this.handleWatchAndRedirect()
      }
    },
    handleWatchAndRedirect () {
      let watch = this.$store.watch((state, getters) => {
        if (!getters['auth/getIsLoading']) {
          this.handleNotify(this.status ,'Mensaje', this.message)
          this.handleRedirect(this.status)
        }
      })

      setTimeout(() => {
        watch()
      }, 1000)
    },
    handleRedirect (status) {
      setTimeout(() => {
        if (status === 200) window.location = '/'
      }, 1000);
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