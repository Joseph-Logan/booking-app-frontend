<template>
  <div class="home">
    <v-layout row wrap justify-start align-start>
     <v-flex xs12 md3>
      <CategoryList />
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
  name: 'Home',
  components : {
    CategoryList,
    Project
  }
}
</script>
