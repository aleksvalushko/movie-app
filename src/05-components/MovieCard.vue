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
        <div :class="$style.headline">
          {{ movie.tagline }}
        </div>
        <div>{{ movie.overview }}</div>
      </div>
      <div>
        <div :class="$style.headline">
          {{ getGenresList }}
        </div>
        <div>
          {{ getProductionCompanies }}
        </div>
      </div>
      <div :class="$style.mainInfoBlock">
        <div style="width: 90%; display: flex; justify-content: space-between;">
          <div>
            <div :class="$style.headline">
              RELEASE DATE:
            </div>
            <div>{{ movie.release_date }}</div>
          </div>
          <div>
            <div :class="$style.headline">
              RUNTIME:
            </div>
            <div>{{ movie.runtime }} mins</div>
          </div>
        </div>
        <div style="width: 90%; display: flex; justify-content: space-between;">
          <div>
            <div :class="$style.headline">
              BOX OFFICE:
            </div>
            <div>$ {{ getRevenue }}</div>
          </div>
          <div>
            <div :class="$style.headline">
              AVERAGE:
            </div>
            <div>{{ movie.vote_average }} / 10</div>
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
      return this.movie.title?.toUpperCase()
    },
    getGenresList () {
      return this.movie.genres?.map(elem => elem.name).join(', ')
    },
    getProductionCompanies () {
      return this.movie.production_companies?.map(elem => elem.name).join(', ')
    },
    getRevenue () {
      return this.movie.revenue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    ...mapState('main', ['movie'])
  },
  methods: {
  }
}
</script>

<style module lang="scss">
.movieCard {
  width: 50%;
  display: flex;
  background-color: black;
  color: white;
  opacity: .9;
  font-size: 16px;
  @media screen and (max-width: 1200px){
    width: 60%;
  }
  @media screen and (max-width: 1000px){
    width: 70%;
  }
  @media screen and (max-width: 850px){
    width: 80%;
  }
  @media screen and (max-width: 670px){
    width: 70%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }

  .poster {
    width: 50%;
    img {
      width: 100%;
    }
    @media screen and (max-width: 670px){
      width: 100%;
    }
  }

  .description {
    width: 50%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 30px;
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

    .mainInfoBlock {
      display: flex;
      flex-direction: column;
    }

    .headline {
      color: forestgreen;
      font-size: 22px;
      font-weight: bold;
      margin: 20px 0 10px 0;
    }
    @media screen and (max-width: 670px){
      width: 90%;
    }
  }
}
</style>
