<template>
  <div class="category-list mx-2">
    <v-list subheader>
      <v-subheader>Categorias</v-subheader>
        <v-divider></v-divider>

        <v-list-tile
          v-for="(item, i) in categories"
          @click="handleCantegory(item)"
          :key="i"
        >

          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
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