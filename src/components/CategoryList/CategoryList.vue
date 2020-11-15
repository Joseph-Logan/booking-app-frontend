<template>
  <div class="category-list mx-2">
    <v-list subheader>
      <v-subheader>
        Categorias
        <v-spacer></v-spacer>
        <vs-button size="sm" @click="handleSubmit" :loading="isLoading">
          <i class="bx bxs-folder mr-3"></i> Ver todo
        </vs-button>
      </v-subheader>
        <v-divider></v-divider>

        <v-list-tile
          v-for="(item, i) in categories"
          @click="handleCantegory(item)"
          :key="i"
        >
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
              <v-icon color="blue"> {{ activeItem === item._id ? 'check' : '' }}</v-icon>
            </v-list-tile-action>
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
      this.$emit('handle-select-category', item)
    }
  },
  mounted () {
    this.getCategories()
  }
}
</script>

<style>

</style>