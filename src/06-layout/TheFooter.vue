<template>
  <div :class="$style.theFooter">
    <div :class="$style.theFooterBlock">
      <a
        href="https://github.com/SKempin/reactjs-tmdb-app"
        title="View Github Repo"
        style="color: white;"
      >
        <img
          src="../assets/github_icon.svg"
          alt="gitHub"
        />
        <span>View Code on GitHub</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style module lang="scss">
.theFooter {
  width: 100%;
  display: flex;
  justify-content: center;
  .theFooterBlock {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 10%;
      margin-right: 10px;
    }
  }
}
</style>
