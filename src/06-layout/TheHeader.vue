<template>
  <div :class="$style.theHeader">
    <div :class="$style.headerBlock">
      <img
        src="../assets/tmdb.svg"
        alt="The movie database"
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
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

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
    ...mapState('main', ['moviesList'])
  },
  methods: {
    async querySearch (queryString) {
      await this.findMovie(queryString)
    },
    handleSelect (value) {
      this.SET_MOVIE(value)
      this.searchValue = ''
      this.SET_MOVIES_LIST([])
    },
    ...mapActions('main', ['findMovie']),
    ...mapMutations('main', ['SET_MOVIE', 'SET_MOVIES_LIST'])
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
      width: 14%;
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
      }
    }
  }
</style>
