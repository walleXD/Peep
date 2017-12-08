<template lang="pug">
  .default-layout
    app-bar
    v-content: v-container(v-if="!booting")
      router-view
      subreddit-loader
    status-bar
</template>

<script>
  import { connect } from 'vue2-redux'
  import { bindActionCreators } from 'redux'

  import AppBar from '../components/AppBar'
  import StatusBar from '../components/StatusBar'
  import SubredditLoader from '../containers/SubredditLoader'
  import { getToken, setBootingState } from 'common/actions'

  const mapStateToProps = ({ reddit: { booting } }) => ({ booting })

  const mapDispatchToProps = dispatch => bindActionCreators({
    getToken,
    setBootingState
  }, dispatch)

  export default connect(mapStateToProps, mapDispatchToProps)({
    name: 'DefaultLayout',
    components: { AppBar, StatusBar, SubredditLoader },
    created () {
      this.setBootingState(true)
      this.getToken()
    }
  })
</script>

