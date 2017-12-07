<template lang="pug">
  .subreddit-loader
    v-btn(@click.native="getMorePosts") Load more
    post-card(
      v-if="posts",
      v-for="post in posts",
      :key="post.data.id",
      :id="post.data.id",
      :title="post.data.title",
      :domain="post.data.domain",
      :subreddit="post.data.subreddit",
      :score="post.data.score",
      :num_comments="post.data.num_comments"
      :thumbnail="post.data.thumbnail"
      :thumbnail_height="post.data.thumbnail_height"
    )
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
  import PostCard from '../components/PostCard'

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
    components: {
      PostCard
    }
  })
</script>
