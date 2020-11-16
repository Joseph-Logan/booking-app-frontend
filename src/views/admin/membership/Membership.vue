<template>
  <div class="membership">
    <v-data-table
      :headers="headers"
      :items="memberships"
      class="elevation-1"
      :loading="isLoading"
    >
      <template v-slot:items="props">
        <td>{{ props.item.transactionId }}</td>
        <td class="">{{ props.item.priceMembership }}</td>
        <td class="">{{ props.item.endDate }}</td>
        <td class="">{{ props.item.isActive ? 'Activo' : 'Inactivo' }}</td>
        <td class="">
          <v-chip dark :color="!props.item.isActive ? 'blue': 'grey'">
            {{ props.item._id }}
          </v-chip>
        </td>
     
        <!-- <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td> -->
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    headers: [
      { text: 'Transaccion #', value: 'transactionId' },
      { text: 'Precio', value: 'priceMembership' },
      { text: 'Fecha expiracion', value: 'endDate' },
      { text: 'Estado', value: 'isActive' },
      { text: 'Codigo activacion', value: 'code'}
    ]
  }),
  computed: {
    ...mapGetters({
      isLoading: 'membership/getIsLoading',
      memberships: 'membership/getMemberships'
    })
  },
  methods: {
    getMemberships () {
      try {
        this.$store.dispatch('membership/handleLoading', true)
        this.$store.dispatch('membership/getMembershipByUser')
      } catch (err) {
        this.$store.dispatch('membership/handleLoading', false)
      }
    }
  },
  mounted () {
    this.getMemberships()
  }
}
</script>

<style>

</style>