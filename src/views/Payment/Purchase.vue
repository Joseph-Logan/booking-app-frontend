<template>
  <div class="purchase">
    <v-layout row wrap justify-center>
      <v-flex xs12 md6>
        <h1 class="text-sm-center">Datos de Pago</h1>
        <Payment />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Payment from './Payment'

export default {

  components: {
    Payment
  }
}
</script>

<style>

</style>