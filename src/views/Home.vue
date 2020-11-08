<template>
  <div class="home">
    <vs-row class="mt-5">
     <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
      <CategoryList />
     </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="9">
        <Project />
      </vs-col>
    </vs-row>
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
