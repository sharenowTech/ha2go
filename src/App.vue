<template>
  <div id="app" class="App container">
    <TheHeader />
    <Content />
    <TheFooter />
  </div>
</template>

<script>

import TheHeader from '@/components/layout/TheHeader'
import Content from '@/components/layout/Content'
import TheFooter from '@/components/layout/TheFooter'

export default {
  name: 'App',

  components: {
    TheHeader,
    Content,
    TheFooter
  }
}
</script>

<style src="@/assets/css/global.scss" lang="scss"></style>
<style lang="scss" scoped>
/*
  Main css class === component name.
  Always belongs to component's top container
*/
.App {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: inherit;
  box-sizing: border-box;

  .TheHeader {
    flex: 1 0 auto;
  }

  .Content {
    flex: 10 0 auto;
  }

  .TheFooter {
    flex: 1 0 auto;
  }
}
</style>
