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
      <div>
        <div>{{ movie.tagline }}</div>
        <div>{{ movie.overview }}</div>
      </div>
      <div>
        <div>
          {{ getGenresList }}
        </div>
        <div
          v-for="item in getProductionCompanies"
          :key="item.id"
          :class="$style.productionCompanies"
        >
          <img
            :src="item.logo"
            alt="no-logo"
            style="color: black; margin-right: 10px;"
          />{{ item.name }}
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-around">
          <div>
            <div>RELEASE DATE:</div>
            <div>{{ movie.release_date }}</div>
          </div>
          <div>
            <div>RUNTIME:</div>
            <div>{{ movie.runtime }} mins</div>
          </div>
        </div>
        <div style="display: flex; justify-content: space-around">
          <div>
            <div>BOX OFFICE:</div>
            <div>{{ movie.revenue }}</div>
          </div>
          <div>
            <div>AVERAGE:</div>
            <div>{{ movie.vote_average }}/10</div>
          </div>
        </div>
      </div>
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
    getGenresList () {
      return this.movie.genres.map(elem => elem.name).join(', ')
    },
    getProductionCompanies () {
      return this.movie.production_companies.map(elem => {
        return {
          id: elem.id,
          logo: elem.logo_path
            ? 'https://image.tmdb.org/t/p/original' + elem.logo_path
            : 'https://img.icons8.com/material-outlined/50/000000/no-image.png',
          name: elem.name
        }
      })
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
  color: white;
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
    //color: white;
  }
}

.productionCompanies {
  display: flex;
  align-items: center;
  margin: 5px 0;
  img {
    margin-right: 10px;
    width: 12%;
    background-color: white;
  }
}
</style>
