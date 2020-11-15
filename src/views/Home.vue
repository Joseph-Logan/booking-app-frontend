<template>
  <div class="home">
    <v-layout row wrap justify-start align-start>
     <v-flex xs12 md3>
      <CategoryList class="mt-3" @handle-select-category = 'handleSelectCategory' />
     </v-flex>
      <v-flex xs12 md9>
        <Project />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CategoryList from '../components/CategoryList'
import Project from '../views/Project'

export default {
  beforeCreate  () {
    document.body.className = 'default-color' 
  },
  components : {
    CategoryList,
    Project
  },
  data: () => ({
    loading: false
  }),
  methods: {
    handleSelectCategory (item) {
      this.$store.dispatch('project/handleLoading', true)
      this.$store.dispatch('project/getProjectsByCategory', item._id)
    }
  }
}
</script>
