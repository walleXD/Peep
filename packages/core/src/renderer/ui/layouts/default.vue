<template lang="pug">
  .default-layout
    app-bar
    v-content: v-container: router-view
</template>

<script>
  import AppBar from '../components/AppBar'

  export default {
    name: 'DefaultLayout',
    components: { AppBar }
  }
</script>

