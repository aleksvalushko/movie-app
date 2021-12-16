<template>
  <div :class="$style.theFooter">
    <div :class="$style.theFooterBlock">
      <a
        href="https://www.linkedin.com/in/aleksvalushko/"
        title="Developer"
        style="color: white;"
      >
        Developed by Aleks Valushko
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
