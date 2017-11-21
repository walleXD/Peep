<template lang="pug">
  .default-layout
    app-bar
    v-content: v-container: router-view
    status-bar
</template>

<script>
  import AppBar from '../components/AppBar'
  import StatusBar from '../components/StatusBar'

  export default {
    name: 'DefaultLayout',
    components: { AppBar, StatusBar }
  }
</script>

