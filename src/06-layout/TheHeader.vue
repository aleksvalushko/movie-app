<template>
  <el-header :class="$style.theHeader">
    <div :class="$style.headerBlock">
      <img
        src="../assets/tmdb.svg"
        alt="The movie database"
        title="To main page"
        @click="returnToMainPage()"
      />
      <el-select
        v-model="searchValue"
        :class="$style.inlineInput"
        clearable
        filterable
        remote
        reserve-keyword
        placeholder="Movie title..."
        :remote-method="querySearch"
        :loading="loadings.loadingMovies"
        no-data-text="No matches"
        :minlength="3"
        :maxlength="100"
        @change="handleSelect"
      >
        <el-option
          v-for="item in moviesList"
          :key="item.id"
          :label="item.title"
          :value="item"
        />
      </el-select>
    </div>
  </el-header>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import { createLoading } from '../05-components/common'

export default {
  name: 'Header',
  data () {
    return {
      searchValue: '',
      loadings: {
        loadingMovies: false
      }
    }
  },
  computed: {
    ...mapState('main', ['moviesList', 'defaultMovieId'])
  },
  methods: {
    async returnToMainPage () {
      await this.getMovie(this.defaultMovieId)
      if (this.$router.history.current.path !== '/') {
        await this.$router.push('/')
      }
    },
    async querySearch (queryString) {
      if (queryString) {
        await this.findMovie(queryString)
      }
    },
    async handleSelect (value) {
      const loading = createLoading()
      if (this.$router.history.current.path !== '/') {
        await this.$router.push('/')
      }
      await this.getMovie(value.id)
      this.searchValue = ''
      this.SET_MOVIES_LIST([])
      await this.$router.push(`movie/${value.id}`)
      loading.close()
    },
    ...mapActions('main', ['findMovie', 'getMovie']),
    ...mapMutations('main', ['SET_MOVIES_LIST'])
  }
}
</script>

<style module lang="scss">
  .theHeader {
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .headerBlock {
      width: 70%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    img {
      cursor: pointer;
      width: 14%;
      @media screen and (max-width: 670px){
        width: 25%;
      }
    }
    .inlineInput {
      width: 50%;
      :global(.el-input__inner) {
        background-color: transparent;
        border-left: none;
        border-right: none;
        border-top: none;
        border-radius: 0;
        font-size: 18px;
        color: white;
        @media screen and (max-width: 670px){
          font-size: 16px;
        }
      }
    }
  }
</style>
