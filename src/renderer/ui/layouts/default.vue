<template lang="pug">
  .default-layout
    app-bar
    v-content: v-container
      router-view
      subreddit-loader
    status-bar
</template>

<script>
  import AppBar from '../components/AppBar'
  import StatusBar from '../components/StatusBar'
  import SubredditLoader from '../containers/SubredditLoader'

  export default {
    name: 'DefaultLayout',
    components: { AppBar, StatusBar, SubredditLoader }
  }
</script>

