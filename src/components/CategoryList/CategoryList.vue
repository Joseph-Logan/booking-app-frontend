<template>
  <div class="category-list mx-2">
    <v-list dense>
      <v-subheader>Categorias</v-subheader>
      <v-list-item-group
        v-model="activeItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in categories"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="handleCantegory(item)">
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    activeItem: 0,
  }),
  computed: {
    ...mapGetters({
      categories: 'category/getCategories'
    }) 
  },
  methods: {
    getCategories () {
      this.$store.dispatch('category/getCategories')
    },
    handleCantegory (item) {
      this.activeItem = item._id
    }
  },
  mounted () {
    this.getCategories()
  }
}
</script>

<style>

</style>