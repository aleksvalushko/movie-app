<template>
  <el-footer :class="$style.theFooter">
    <div :class="$style.theFooterBlock">
      <span>Developed by Aleks Valushko</span>
      <el-link
        href="https://www.linkedin.com/in/aleksvalushko/"
        title="LinkedIn"
        :underline="false"
        :class="$style.link"
      >
        Link to LinkedIn <img
          src="../assets/linkedin.png"
          alt="LinkedIn"
        />
      </el-link>
      <el-link
        href="https://github.com/aleksvalushko/movie-app"
        title="GitHub"
        :underline="false"
        :class="$style.link"
      >
        Link to GitHub <img
          src="../assets/github.png"
          alt="LinkedIn"
        />
      </el-link>
    </div>
  </el-footer>
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
  margin-bottom: 10px;

  .theFooterBlock {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;

    :global(.el-link.el-link--default:hover) {
      color: forestgreen;
    }

    .link {
      color: white;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0;

      img {
        width: 3%;
        margin-right: 10px;
      }
    }
  }
}
</style>
