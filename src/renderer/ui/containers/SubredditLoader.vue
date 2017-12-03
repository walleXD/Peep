<template lang="pug">
  .subreddit-loader
    v-btn(@click.native="getMorePosts") Load more
    li(v-if="posts", v-for="post in posts", :key="post.data.id") {{ post }}
</template>

<script>
  import { connect } from 'vue2-redux'
  import { bindActionCreators } from 'redux'
  import {
    setActive,
    clearActive,
    getPosts,
    getMorePosts
  } from '../../../common/actions'

  const mapStateToProps = ({ reddit }) => ({
    posts: reddit.posts
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    setActive,
    clearActive,
    getPosts,
    getMorePosts
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )({
    name: 'SubredditLoader',
    created () {
      this.setActive('')
      this.getPosts()
    }
  })
</script>
