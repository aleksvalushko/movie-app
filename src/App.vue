<template>
  <div
    id="app"
    :style="getBackgroundImage() || null"
  >
    <div
      :class="$style.wrapper"
    >
      <the-header />
      <movie-card />
      <the-footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import MovieCard from './05-components/MovieCard'
import { errorNotification } from './05-components/common'
import TheFooter from './06-layout/TheFooter'
import TheHeader from './06-layout/TheHeader'

export default {
  components: { MovieCard, TheHeader, TheFooter },
  data () {
    return {}
  },
  computed: {
    ...mapState('main', ['movie', 'defaultMovieId'])
  },
  methods: {
    getBackgroundImage () {
      return {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${this.movie.backdrop_path || '/d72ROyJqXQtw2OupW0l15eicRAF.jpg'})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black'
      }
    },
    ...mapActions('main', ['getMovie'])
  },
  async mounted () {
    try {
      if (this.$router.history.current.path !== '/') {
        await this.$router.push('/')
      }
      await this.getMovie(this.defaultMovieId)
    } catch (error) {
      await errorNotification(error)
    }
  }
}
</script>

<style module lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
body  {
  margin: 0;
  font-family: Cabin, sans-serif;
}

a  {
  text-decoration:none;
}

li {
  list-style-type: none; /* Убираем маркеры */
}

ul {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}
.wrapper {
  background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.3), rgba(0,0,0,1));
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 670px){
    height: auto;
  }
}
</style>
