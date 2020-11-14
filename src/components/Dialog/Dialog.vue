<template>
    <div class="center">
      <v-dialog 
        v-model="activeDialog"
        width="700"
        style="z-index: 10;"
        dark
      >
        <!-- <template #header>
          <h4 class="not-margin">
            Tu perfil
          </h4>
        </template>
        Nombre
        <vs-input v-model="name" readonly>
          <template #icon>
            <span class="material-icons">
              account_circle
            </span>
          </template>
        </vs-input>
        Correo
        <vs-input v-model="email" readonly>
          <template #icon>
            <span class="material-icons">
              email
            </span>
          </template>
        </vs-input>
        Identificación
        <vs-input v-model="dni" readonly>
          <template #icon>
            <span class="material-icons">
              payment
            </span>
          </template>
        </vs-input>
        <template #footer>
        </template> -->
        <v-layout row>
          <v-flex xs12 sm12>
            <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                height="300px"
              >
                <v-layout
                  column
                  fill-height
                >
                  <v-card-title>
                    <v-btn dark icon>
                      <v-icon>chevron_left</v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn dark icon class="mr-3">
                      <v-icon>edit</v-icon>
                    </v-btn>

                    <v-btn dark icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-card-title>

                  <v-spacer></v-spacer>

                  <v-card-title class="white--text pl-5 pt-5">
                    <div class="display-1 pl-5 pt-5"> {{ name }} </div>
                  </v-card-title>
                </v-layout>
              </v-img>

              <v-list two-line>
                <v-list-tile >
                  <v-list-tile-action>
                    <v-icon color="indigo">phone</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon>chat</v-icon>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action></v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                    <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon>chat</v-icon>
                  </v-list-tile-action>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">mail</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                    <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action></v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                    <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">location_on</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>1400 Main Street</v-list-tile-title>
                    <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-dialog>
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
      email: '',
      dni: ''
    }),
    methods: {
      async userDetails() {
        let user = JSON.parse(Storage.getItem('user'))
        this.name = user.name + ' ' + user.firstSurname + ' ' + user.secondSurname
        this.email = user.email
        this.dni = user.dni
      }
    },
    async mounted () {
      await this.userDetails()
      
    }
  };
</script>
