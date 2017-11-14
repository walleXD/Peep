<template lang="pug">
  v-toolbar(
    dark,
    app,
    color="primary"
  ).app-bar
    v-toolbar-side-icon
    v-toolbar-title.white--text Peep
    v-spacer
    v-btn(icon): v-icon search

</template>

<script>
  export default {
    name: 'AppBar'
  }
</script>

<style lang="stylus" scoped>
  .app-bar
    //
</style>

