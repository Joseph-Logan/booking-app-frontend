<template>
    <div class="center">
      <v-dialog 
        v-model="activeDialog"
        width="700"
        style="z-index: 10;"
        dark
        persistent
      >
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
                    <v-btn dark icon @click="handleActiveDialog">
                      <v-icon>chevron_left</v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <!-- <v-btn dark icon class="mr-3">
                      <v-icon>edit</v-icon>
                    </v-btn> -->

                    <!-- <v-btn dark icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn> -->
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
                    <v-icon color="indigo">credit_card</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title> {{ dni }} </v-list-tile-title>
                    <v-list-tile-sub-title>Identificación</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">mail</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title> {{ email }} </v-list-tile-title>
                    <v-list-tile-sub-title>Correo Electronico Personal</v-list-tile-sub-title>
                  </v-list-tile-content>
                   <v-list-tile-action>
                    <v-icon>chat</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                  </v-list-tile-action>
                  <v-list-tile-content>
                  </v-list-tile-content>
                   <v-list-tile-action>
                   <v-btn
                      depressed
                      color="primary"
                      @click="handleActiveDialog"
                    >
                      Cerrar
                    </v-btn>
                  </v-list-tile-action>
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
        default: () => false
      }
    },
    data: () => ({
      name: '',
      email: '',
      dni: ''
    }),
    methods: {
      removeMessage() {
         setTimeout(()=> this.show = false, 4 * 1000);
      },
      async userDetails() {
        let user = JSON.parse(Storage.getItem('user'))
        this.name = user.name + ' ' + user.firstSurname + ' ' + user.secondSurname
        this.email = user.email
        this.dni = user.dni
      },
      handleActiveDialog(){
        this.activeDialog = false
      }
    },
    async mounted () {
      await this.userDetails()
    },
    
  };
</script>
