<template>
  <header class="TheHeader section">
    <div>
      <img
        class="logo"
        :alt="title"
        :title="title"
        src="@/assets/icons/logo.svg"
      >
    </div>
    <div class="numero-uno">{{ title }}</div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',

  computed: {
    title () {
      return 'Fleet Explorer'
    }
  }
}
</script>

<style lang="scss" scoped>
.TheHeader {
  text-align: center;

  .logo {
    width: 5rem;
  }

  .numero-uno {
    font-weight: normal;
  }
}
</style>
