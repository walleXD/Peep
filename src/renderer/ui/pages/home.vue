<template lang="pug">
  #home-page
    h1 Home Page
    example
    subreddit-loader
</template>

<script>
  import Example from '../containers/Example.vue'
  import SubredditLoader from '../containers/SubredditLoader.vue'

  export default {
    components: { Example, SubredditLoader },
    name: 'HomePage'
  }
</script>
