<template>
    <div class="center">
      <vs-dialog overflow-hidden prevent-close v-model="activeDialog">
        <template #header>
          <h4 class="not-margin">
            Tu perfil
          </h4>
        </template>
        <div class="con-form" >
          <vs-input v-model="name" readonly>
            <template #icon>
              <span class="material-icons">
                account_circle
              </span>
            </template>
          </vs-input>
          <vs-input v-model="surname" readonly>
            <template #icon>
              <span class="material-icons">
                account_circle
              </span>
            </template>
          </vs-input>
          <vs-input v-model="email" readonly>
            <template #icon>
              <span class="material-icons">
                email
              </span>
            </template>
          </vs-input>
          <vs-input v-model="dni" readonly>
            <template #icon>
             <span class="material-icons">
                fingerprint
              </span>
            </template>
          </vs-input>
        </div>
        <template #footer>
        </template>
      </vs-dialog>
    </div>
</template>
<script>
  import Storage from '../../utils/storage'
  
  export default {
    props: {
      activeDialog: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      name: '',
      surname: '',
      email: '',
      dni: ''
    }),
    methods: {
      async userDetails() {
        let user = JSON.parse(Storage.getItem('user'))
        this.name = user.name
        this.surname = user.firstSurname + ' ' + user.secondSurname
        this.email = user.email
        this.dni = user.dni
      }
    },
    async mounted () {
      await this.userDetails()
    }
  };
</script>
