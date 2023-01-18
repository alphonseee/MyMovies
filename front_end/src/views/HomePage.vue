<template>

  <div class="all">
    <div v-for="movies in info" :key="movies.id">
      <div class="one">
        <img :src="movies.image" alt="image_movies" class="img_movies"/>
        <div class="texte">
          <h1>{{ movies.title }}</h1>
          <p>Runtime : {{ movies.runtime }}</p>
          <p>Release date : {{ movies.release_date }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      info: ''
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/home')
        .then(response => (this.info = response.data))
  }
}
</script>

<style scoped>

</style>