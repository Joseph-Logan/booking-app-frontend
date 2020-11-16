<template>
  <div class="purchase">
    <v-card class="ma-2" elevation="0">
      <v-card-text class="font-weight-bold">
       <h1>Compra de membresia</h1>
      </v-card-text>
    </v-card>
    <v-layout row wrap justify-center>
      <v-flex xs12 md6 >
        <v-card elevation='0' class="ma-2">
          <v-card-title>
            <h2 class="text-sm-center">Datos de Pago</h2>
          </v-card-title>
          <v-card-text>
            <Payment />
          </v-card-text>
        </v-card>
      </v-flex>

       <v-flex xs12 md6 >
        <v-card elevation='0' class="ma-2">
          <v-card-title>
            <h2 class="text-sm-center">Datos de compra</h2>
          </v-card-title>
          <v-card-text>
            <v-alert 
              :value="true"
              type="info"
              color="#1e88e5"
              style="border-radius: 5px"
            >
              <span class="title">
                Si realizas la compra de la membresia aca se desplegara el codigo para que puedas activar tu proyecto
              </span>
            </v-alert>

            <h3 class="mt-3">Datos de la compra</h3>

            <v-card v-if="membership.length > 0">
              <v-card-title>
                <v-layout row wrap>
                  <v-flex xs12 class="ma-1">
                    <span class="grey--text mx-2">Codigo de activacion membresia</span>
                    <v-chip color="blue" text-color="white">
                      <span>{{ membership[0]._id }}</span>
                    </v-chip>
                  </v-flex>

                  <v-flex xs12 class="ma-1">
                    <span class="grey--text mx-2">Transaccion #</span>
                    <span>{{ membership[0].transactionId }}</span>
                  </v-flex>

                  <v-flex xs12 class="ma-1">
                    <span class="grey--text mx-2">Descripcion</span>
                    <span>{{ membership[0].description }}</span>
                  </v-flex>

                  <v-flex xs12 class="ma-1">
                    <span class="grey--text mx-2">Fecha vencimiento</span>
                    <span>{{ membership[0].endDate }}</span>
                  </v-flex>

                   <v-flex xs12 class="ma-1">
                    <span class="grey--text mx-2">Precio de membresia</span>
                    <span>{{ membership[0].priceMembership }}</span>
                  </v-flex>

                </v-layout>
              </v-card-title>
            </v-card>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Payment from './Payment'
import { mapGetters } from 'vuex'

export default {
  beforeCreate  () {
    document.body.className = 'default-color' 
  },
  computed: {
    ...mapGetters({
      membership: 'membership/getMemberships'
    })
  },
  components: {
    Payment
  },
  beforeDestroy () {
    this.$store.dispatch('membership/resetState')
  },
  mounted () {
    this.$store.dispatch('membership/resetState')
  }
}
</script>

<style>

</style>