<template>
  <div :class="$style.movieCard">
    <div :class="$style.poster">
      <img
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path || '/d72ROyJqXQtw2OupW0l15eicRAF.jpg'}`"
        alt="poster"
      />
    </div>
    <div :class="$style.description">
      <div :class="$style.title">
        {{ getTitle }}
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieCard',
  computed: {
    getTitle () {
      return this.movie.title.toUpperCase()
    },
    ...mapState('main', ['movie'])
  },
  methods: {
  }
}
</script>

<style module lang="scss">
.movieCard {
  width: 60%;
  display: flex;
  background-color: black;
  opacity: .9;
}
.poster {
  width: 50%;
  img {
    width: 100%;
  }
}
.description {
  width: 50%;
  .title {
    color: white;
    font-family: 'Cabin';
  }
}
</style>
