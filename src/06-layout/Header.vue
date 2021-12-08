<template>
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
        v-for="(item, index) in links"
        :key="index"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      searchValue: '',
      links: ['one', 'two', 'three', 'four'],
      loadings: {
        loadingMovies: false
      }
    }
  },
  methods: {
    querySearch () {
    },
    handleSelect (value) {
      console.log(value)
    }
  }
}
</script>

<style module lang="scss">
  .headerBlock {
    width: 100%;
    height: 6vh;
    //background-color: #2c3e50;
    display: flex;
    margin-top: 15px;
    justify-content: space-around;
    align-items: center;
    img {
      width: 8%;
    }
    .inlineInput {
      width: 30%;
      :global(.el-input__inner) {
        background-color: aliceblue;
        border-left: none;
        border-right: none;
        border-top: none;
        border-radius: 0;
      }
    }
  }
</style>
